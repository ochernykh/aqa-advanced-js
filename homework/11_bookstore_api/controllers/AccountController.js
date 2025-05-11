const BaseController = require('./BaseController');

class AccountController extends BaseController {
  async getAuthToken(userName, password) {
    const response = await this.axiosInstance.post(
      '/Account/v1/GenerateToken',
      {
        userName,
        password,
      }
    );
    if (response.data.status !== 'Success') {
      throw new Error(
        `Token generation failed: ${JSON.stringify(response.data)}`
      );
    }
    return response.data.token;
  }

  async getUserId(userName, password) {
    const response = await this.axiosInstance.post('/Account/v1/Login', {
      userName,
      password,
    });
    if (!response.data.userId) {
      throw new Error(`User login failed: ${JSON.stringify(response.data)}`);
    }
    return response.data.userId;
  }
}

module.exports = new AccountController();
