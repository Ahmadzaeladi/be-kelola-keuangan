import auth from '../models/auth.model.js';


export const login = async (req, res) => {

    const crypto = await import('crypto');
    const hash = (passwordAsli) => {
    return crypto
        .createHash('sha256')
        .update(passwordAsli)
        .digest('hex');
    };

    const { username, password } = req.body;

    const inputPasswordHashed = hash(password); // Hash the input password

    const user = await auth.authenticateUser(username, inputPasswordHashed);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
};