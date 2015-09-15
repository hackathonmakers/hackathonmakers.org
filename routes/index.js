
/*
 * GET home page.
 */


exports.parana2014 = function(req, res){
  res.render('parana-2014/index', { title: 'Express' });
};

exports.santafe2013 = function(req, res){
  res.render('santafe-2013/index', { title: 'Express' });
};

exports.home = function(req, res){
  res.render('hackathon-makers/index', { title: 'Express' });
};