package com.example.api_project.service.impl;

import com.example.api_project.mapper.SalesIntegrateMapper;
import com.example.api_project.service.SalesIntegrateService;
import com.example.api_project.vo.SalesIntegrate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * 销售统计
 *
 */
@Service("SalesIntegrateService")
public class SalesIntegrateImpl implements SalesIntegrateService {
    @Autowired
    private SalesIntegrateMapper salesIntegrateMapper;

    /**
     * 分页查询
     *
     * @param salesIntegrate 筛选条件
     * @param startRows
     * @param pageSize
     * @return 查询结果
     */
    @Override
    public Map<String, Object> queryByPage(SalesIntegrate salesIntegrate, Integer startRows, Integer pageSize) {
        String shopCode=salesIntegrate.getShopCode();
        List<SalesIntegrate> records = this.salesIntegrateMapper.queryAllByShop(shopCode,startRows, pageSize);
        long total = records.size();
        Map<String,Object> res = new HashMap<>();
        res.put("records",records);
        res.put("total",total);
        return res;
    }

}
