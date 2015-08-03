exports.question = function(req, res){
    res.render('quizes/question', {pregunta: 'Capital de Italia'});
    res.render('quizes/question', {pregunta: 'Inventor del Bombillo'});
    res.render('quizes/question', {pregunta: 'Red de Redes'});
};

exports.answer = function(req, res){
    if(req.query.respuesta === 'Roma')
        res.render('quizes/answer', {respuesta: 'Correcto'});
    else
        res.render('quizes/answer', {respuesta: 'Incorrecto'});
    if(req.query.respuesta === 'Thomas Alba Edison')
            res.render('quizes/answer', {respuesta: 'Correcto'});
    else
          res.render('quizes/answer', {respuesta: 'Incorrecto'});
    if(req.query.respuesta === 'Internet')
          res.render('quizes/answer', {respuesta: 'Correcto'});
    else
          res.render('quizes/answer', {respuesta: 'Incorrecto'});
};

exports.author = function(req, res){
    res.render('author');
}
