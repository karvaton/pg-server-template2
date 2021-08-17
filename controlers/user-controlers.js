import ApiError from "../error/ApiError.js";

export async function registration(params) {
    
}

export async function login(params) {
    
}

export async function checkAuth(req, res, next) {
    const { id } = req.query;
    if (!id) {
        return next(ApiError.badRequest('Не заданий ID'));
    }
    res.status(200).json(id)
}