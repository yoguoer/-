package com.example.api_project.pojo;

import java.io.Serializable;

/**
 * 零售商商品库存表(ShopkeeperWarehouse)实体类
 *
 */
public class ShopkeeperWarehouse implements Serializable {
    private static final long serialVersionUID = 639658159625040743L;
    /**
     * 主键
     */
    private String shopkeeperWarehouseKey;
    /**
     * 商品编码
     */
    private String goodsCode;
    /**
     * 货位编码
     */
    private String positionCode;
    /**
     * 门店编码
     */
    private String shopCode;
    /**
     * 库存上限
     */
    private Integer maxNum;
    /**
     * 库存下限
     */
    private Integer minNum;
    /**
     * 账面库存
     */
    private Integer accountNum;
    /**
     * 占用数
     */
    private Integer occupyNum;
    /**
     * 可用数
     */
    private Integer availableNum;
    /**
     * 最后操作时间
     */
    private String operateTime;
    /**
     * 描述
     */
    private String description;

    public String getOperateTime() {
        return operateTime;
    }

    public void setOperateTime(String operateTime) {
        this.operateTime = operateTime;
    }

    public String getShopkeeperWarehouseKey() {
        return shopkeeperWarehouseKey;
    }

    public void setShopkeeperWarehouseKey(String shopkeeperWarehouseKey) {
        this.shopkeeperWarehouseKey = shopkeeperWarehouseKey;
    }

    public String getGoodsCode() {
        return goodsCode;
    }

    public void setGoodsCode(String goodsCode) {
        this.goodsCode = goodsCode;
    }

    public String getPositionCode() {
        return positionCode;
    }

    public void setPositionCode(String positionCode) {
        this.positionCode = positionCode;
    }

    public String getShopCode() {
        return shopCode;
    }

    public void setShopCode(String shopCode) {
        this.shopCode = shopCode;
    }

    public Integer getMaxNum() {
        return maxNum;
    }

    public void setMaxNum(Integer maxNum) {
        this.maxNum = maxNum;
    }

    public Integer getMinNum() {
        return minNum;
    }

    public void setMinNum(Integer minNum) {
        this.minNum = minNum;
    }

    public Integer getAccountNum() {
        return accountNum;
    }

    public void setAccountNum(Integer accountNum) {
        this.accountNum = accountNum;
    }

    public Integer getOccupyNum() {
        return occupyNum;
    }

    public void setOccupyNum(Integer occupyNum) {
        this.occupyNum = occupyNum;
    }

    public Integer getAvailableNum() {
        return availableNum;
    }

    public void setAvailableNum(Integer availableNum) {
        this.availableNum = availableNum;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}

