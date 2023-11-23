exports.checkId = (req, res, next, val) => {
  if (val > 1) {
    return res.status(404).json({
      status: 'fail',
      massage: 'invalid ID',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body['name'] || !req.body['price']) {
    return res.status(400).json({
      status: 'fail',
      massage: 'Missing name or price',
    });
    
  }
 next();
};

exports.getAllTours = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.getTour = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.createTour = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.updateTour = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};

exports.deleteTour = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!',
  });
};
