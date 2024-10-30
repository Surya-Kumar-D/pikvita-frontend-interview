import React from 'react'
import { Flex, Spin } from 'antd'

const Loader: React.FC = () => (
  <div className="flex flex-col items-center mt-[40px] gap-[16px] text-[14px]">
    <Flex align="center" gap="middle">
      <Spin size="large" tip="Loading...">
        <div className="p-[50px] rounded-[4px]"></div>
      </Spin>
    </Flex>
  </div>
)

export default Loader
