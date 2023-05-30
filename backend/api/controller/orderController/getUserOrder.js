const Order = require('../../models/order');

const getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    // Retrieve orders associated with the user
    const orders = await Order.findAll({ where: { userId } });

    if (orders.length === 0) {
      return res.status(404).json({ message: 'No orders found!' });
    }

    return res.status(200).json({ orders });
  } catch (error) {
    console.error('Error retrieving orders:', error);
    return res.status(500).json({ error: 'Failed to retrieve orders' });
  }
};

module.exports = getOrdersByUser;
