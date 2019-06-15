package cn.jbone.configuration.props.rpcs;

import lombok.Data;

import java.io.Serializable;

@Data
public class ShopServerProperties implements Serializable {
    private ShopServerFeignProperties feign = new ShopServerFeignProperties();
}
