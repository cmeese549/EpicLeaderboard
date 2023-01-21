const service = require("./service");

(function () {
    'use strict';

    module.exports = {
        getTopTen: getTopTen,
        addNewScore: addNewScore
    };

    const filter = require('leo-profanity');
    filter.loadDictionary();

    function getTopTen(req, res, next) {
        try {
            service
                .getTopTenScore(req.params.gameVersion)
                .then(success)
                .catch(failure);
            function success (data) {
                let resData = [];
                data.forEach(entry => {
                    resData.push({
                        name: entry.name,
                        score: entry.score,
                        wave: entry.wave
                    });
                });
                req.response = resData;
                next();
            }
            function failure (error) {
                next(error);
            }
        }
        catch(err) {
            next(err);
        }
    }

    function addNewScore(req, res, next) {
        try {
            service
                .addScore({ 
                    name: filter.clean(req.body.name), 
                    score: req.body.score,
                    wave:  req.body.wave,
                    gameVersion: req.body.gameVersion
                })
                .then(success)
                .catch(failure);
            function success(data) {
                req.response = data;
                next();
            }
            function failure(error) {
                next(error);
            }
        }
        catch(err) {
            next(err);
        }
    }

})();

