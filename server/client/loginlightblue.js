exports.submit = async (session, models, vars) => {
    await session.transform.powwowtraining60.update('loginlightblue', models.loginlightblue);
    await session.transform.powwowtraining60.action('loginlightblue', 'submit');
};