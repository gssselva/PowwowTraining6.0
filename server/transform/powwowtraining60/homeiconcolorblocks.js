exports.homeiconcolorblocks = async (session, models, vars) => {
    models.homeiconcolorblocks = vars.page;
    await session.screen('homeiconcolorblocks');
};