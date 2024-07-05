function isNotProduction() {
    return process.env.NODE_ENV !== 'production';
}

function getOmniBuilderRootPath() {
    let OMNIBUILDER_ROOT_PATH: string | undefined = '___ENV-VAR-OMNIBUILDER_ROOT_PATH___';

    if (process.env.REACT_APP_OMNIBUILDER_ROOT_PATH && isNotProduction()) {
        OMNIBUILDER_ROOT_PATH = process.env.REACT_APP_OMNIBUILDER_ROOT_PATH;
    }

    return OMNIBUILDER_ROOT_PATH;
}

function getAesKey() {
    let AES_KEY: string | undefined = '___ENV-VAR-AES_KEY___';

    if (process.env.REACT_APP_AES_KEY && isNotProduction()) {
        AES_KEY = process.env.REACT_APP_AES_KEY;
    }

    return AES_KEY;
}

function getPendoCookieDomain() {
    let PENDO_COOKIE_DOMAIN: string | undefined = '___ENV-VAR-PENDO_COOKIE_DOMAIN___';

    if (process.env.REACT_APP_PENDO_COOKIE_DOMAIN && isNotProduction()) {
        PENDO_COOKIE_DOMAIN = process.env.REACT_APP_PENDO_COOKIE_DOMAIN;
    }

    return PENDO_COOKIE_DOMAIN;
}

function getRecaptchaSitekey() {
    let RECAPTCHA_SITE_KEY = '___ENV-VAR-RECAPTCHA_SITE_KEY___';

    if (process.env.REACT_APP_RECAPTCHA_SITE_KEY && process.env.NODE_ENV !== 'production') {
        RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
    }

    return RECAPTCHA_SITE_KEY;
}

// eslint-disable-next-line
export default {
    isNotProduction,
    getOmniBuilderRootPath,
    getAesKey,
    getPendoCookieDomain,
    getRecaptchaSitekey
};
