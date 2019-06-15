package cn.jbone.configuration.props.rpcs;

import lombok.Data;

import java.io.Serializable;

@Data
public class ItemServerProperties implements Serializable {
    private ItemServerFeignProperties feign = new ItemServerFeignProperties();
}
