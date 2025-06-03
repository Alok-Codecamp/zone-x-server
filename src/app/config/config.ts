import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    app_mode: process.env.APP_MODE,
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    salt_rounds: process.env.SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_default_expireIn: process.env.JWT_DEFAULT_EXPIREIN,
    jwt_remember_expireIn: process.env.JWT_REMEMBER_EXPIREIN,
}

