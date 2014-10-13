
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.nuIndex = function(req, res){
  res.render('2015/index', { title: 'Express' });
};