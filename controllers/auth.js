const authService = require('../services/auth.service');

const registerUser = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json({
            code: 201,
            data: {
                name: user.name,
                email: user.email,
                subscription: user.subscription,
                id: user._id,
            }
        });
    } catch (e) {
        next(e);
    }
}

const loginUser = async (req, res, next) => {
    try {
        const {token, email, subscription, name} = await authService.loginUser(req.body);
        res.json({token, email, subscription, name});
    } catch (e) {
        next(e);
    }
}

const logoutUser = async (req, res, next) => {
    try {
        await authService.logoutUser(req.user._id);
        res.sendStatus(204);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    registerUser, loginUser, logoutUser,
}
