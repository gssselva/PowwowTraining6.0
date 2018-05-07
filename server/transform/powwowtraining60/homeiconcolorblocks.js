exports.homeiconcolorblocks = async (session, models, vars) => {
    models.homeiconcolorblocks = vars.page;
    await session.screen('homeiconcolorblocks');
};
exports['Personal Information'] = async (session, models, vars) => {
    await session.transform.powwowtraining60.action('homeiconcolorblocks', 'Personal Information');
};