import React from 'react';

import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Howitworks = () => {
  return <div className="dk-home-outer-5-container container">
    <h1 className="dk-home-outer-5-title ">FAQs</h1>
  <Collapse
            bordered={false}

            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
            >
            <Panel header="This is panel header 1" key="1" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 1" key="4" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="5" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="6" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 1" key="7" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="8" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="9" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 1" key="10" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="11" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="12" className="site-collapse-custom-panel">
            <p>{text}</p>
            </Panel>
        </Collapse>
         </div>
}

export default Howitworks;
