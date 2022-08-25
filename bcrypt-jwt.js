import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

(async () => {
  const password = '123456';
  const passwordHash = await bcrypt.hash(password, 12);

  const userLoginPassword = '123456';

  const passwordIsValid = await bcrypt.compare(userLoginPassword, passwordHash);
  console.log(passwordIsValid);
})();

(async () => {
  const JWT_SECRET = 'secret';

  let token = jwt.sign({ userId: '123' }, JWT_SECRET, { expiresIn: '7d' });

  const tokenData = jwt.verify(token, JWT_SECRET);

  console.log(tokenData);
})();
