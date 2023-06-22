/*
 * This file defines the controller for listing products based on campus
 * Check the routes folder for the endpoint
 */

const Product = require('../../models/product');
const NodeCache = require('node-cache');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

const cache = new NodeCache();

const getCampusBasedProducts = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: `Invalid input`,
        errors: errors.array(),
      });
    }
    const page = parseInt(req.query.page); //|| 1;
    const limit = parseInt(req.query.limit); //|| 20;
    const { campus } = req.params;
    const offset = (page - 1) * limit;

    if (isNaN(page) || isNaN(limit) || page <= 0 || limit <= 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid page or limit value',
      });
    }

    const cacheKey = `campus:${campus}:page:${page}:limit:${limit}`;

    // check if the data is cached
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      return res.status(200).json({
        success: true,
        data: cachedData,
      });
    }

    const { count, rows: products } = await Product.findAndCountAll({
      where: { campus: { [Op.like]: `%${campus}%` } },
      order: [['createdAt', 'DESC']],
      offset,
      limit,
    });

    //const totalProducts = await Product.count();

    const totalPages = Math.ceil(count / limit);

    const response = {
      products,
      totalPages,
    };

    cache.set(cacheKey, response);

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch products',
    });
  }
};

module.exports = getCampusBasedProducts;
