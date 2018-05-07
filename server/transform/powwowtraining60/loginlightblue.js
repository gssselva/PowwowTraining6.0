exports.loginlightblue = async (session, models, vars) => {
    models.loginlightblue = vars.page;
    await session.screen('loginlightblue');
};