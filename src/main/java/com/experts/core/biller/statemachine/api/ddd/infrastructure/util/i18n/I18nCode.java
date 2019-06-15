package com.experts.core.biller.statemachine.api.ddd.infrastructure.util.i18n;

public class I18nCode {
    public final String code;
    public final Object[] args;

    public I18nCode(String code, Object... args) {
        this.code = code;
        this.args = args;
    }
}
