(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{MZF8:function(e,n,t){"use strict";var o=t("ogwx");t.d(n,"a",(function(){return o["b"]}));t("VCU9")},OYlG:function(e,n,t){"use strict";t.r(n);var o=t("mn0l"),r=t("ahKI"),s=t.n(r),a=t("RGYn"),u=t("DBVu"),i=t("GAyR"),c=t("7JWa"),l="import React from 'react';\nimport { Button } from 'antd';\nimport { useBoolen } from 'yanhuo-hooks';\n\nexport default () => {\n  const [state, { toggle, setTrue, setFalse }] = useBoolen(true);\n  return (\n    <div>\n      <p>Effects\uff1a{JSON.stringify(state)}</p>\n      <div>\n        <Button onClick={toggle}>Toggle</Button>\n        <Button onClick={setFalse} style={{ margin: '0 16px' }}>\n          Set false\n        </Button>\n        <Button onClick={setTrue}>Set true</Button>\n      </div>\n    </div>\n  );\n};",d="import React from 'react';\nimport { useCookieState } from 'yanhuo-hooks';\nimport { Input } from 'antd';\n\nexport default () => {\n  const [message, setMessage] = useCookieState('useCookieStateString');\n\n  return (\n    <Input\n      placeholder=\"\u8bf7\u8f93\u5165\u5185\u5bb9\"\n      value={message}\n      onChange={(e) => setMessage(e.target.value)}\n      style={{ width: '300px' }}\n    ></Input>\n  );\n};",p="import React from 'react';\nimport { Button } from 'antd';\nimport { useCookieState } from 'yanhuo-hooks';\n\nexport default function App() {\n  const [value, setValue] = useCookieState('useCookieStateUpdater', {\n    defaultValue: '0',\n  });\n\n  return (\n    <>\n      <p>{value}</p>\n      <Button\n        style={{ marginRight: '16px' }}\n        onClick={() => setValue((v) => String(Number(v) + 1))}\n      >\n        inc +\n      </Button>\n      <Button\n        style={{ marginRight: '16px' }}\n        onClick={() => setValue((v) => String(Number(v) - 1))}\n      >\n        dec -\n      </Button>\n      <Button onClick={() => setValue('0')}>reset</Button>\n    </>\n  );\n}",m="import React from 'react';\nimport { Button } from 'antd';\nimport { useCookieState } from 'yanhuo-hooks';\n\nexport default function App() {\n  const [value, setValue] = useCookieState('useCookieStateOptions', {\n    defaultValue: '0',\n    path: '/',\n    expires: (() => new Date(+new Date() + 10000))(),\n  });\n\n  return (\n    <>\n      <p>{value}</p>\n      <Button\n        style={{ marginRight: 16 }}\n        onClick={() =>\n          setValue((v) => String(Number(v) + 1), {\n            expires: (() => new Date(+new Date() + 10000))(),\n          })\n        }\n      >\n        inc + (10s expires)\n      </Button>\n      <Button\n        style={{ marginRight: 16 }}\n        onClick={() =>\n          setValue((v) => String(Number(v) - 1), {\n            expires: (() => new Date(+new Date() + 10000))(),\n          })\n        }\n      >\n        dec - (10s expires)\n      </Button>\n      <Button onClick={() => setValue('0')}>reset</Button>\n    </>\n  );\n}",f="import React, { useState } from 'react';\nimport { Input } from 'antd';\nimport { useDebounce } from 'yanhuo-hooks';\n\nexport default () => {\n  const [value, setValue] = useState<string>('');\n  const debouncedValue = useDebounce(value, { wait: 500 });\n\n  return (\n    <>\n      <Input\n        style={{ width: '500px' }}\n        value={value}\n        onChange={(e) => setValue(e.target.value)}\n        placeholder=\"\u8bf7\u8f93\u5165...\"\n      />\n      <div style={{ marginTop: '20px' }}>DebouncedValue: {debouncedValue}</div>\n    </>\n  );\n};",h="import React, { useState } from 'react';\nimport { Button } from 'antd';\nimport { useDebounceFn } from 'yanhuo-hooks';\n\nexport default () => {\n  const [value, setValue] = useState(0);\n  const { run } = useDebounceFn(\n    () => {\n      setValue(value + 1);\n    },\n    { wait: 500 },\n  );\n\n  return (\n    <div>\n      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>\n      <Button onClick={run}>Click fast!</Button>\n    </div>\n  );\n};",v="import React, { useState, useEffect } from 'react';\nimport { useLatest } from 'yanhuo-hooks';\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  const latestCount = useLatest(count);\n\n  useEffect(() => {\n    const timer = setInterval(() => {\n      setCount(latestCount.current + 1);\n    }, 1000);\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n  return (\n    <div>\n      <p>count: {count}</p>\n    </div>\n  );\n};",g="import React from 'react';\nimport { Input, Button } from 'antd';\nimport { useLocalStorageState } from 'yanhuo-hooks';\n\nexport default function () {\n  const [message, setMessage] = useLocalStorageState<string | undefined>(\n    'use-local-storage-state-demo1',\n    {\n      defaultValue: 'Hello~',\n    },\n  );\n\n  return (\n    <>\n      <Input\n        value={message || ''}\n        placeholder=\"Please enter some words...\"\n        onChange={(e) => setMessage(e.target.value)}\n        style={{ width: 300 }}\n      />\n      <Button style={{ margin: '0 8px' }} onClick={() => setMessage('Hello~')}>\n        Reset\n      </Button>\n      <Button danger onClick={() => setMessage(undefined)}>\n        Clear\n      </Button>\n    </>\n  );\n}",k="import React from 'react';\nimport { Button } from 'antd';\nimport { useLocalStorageState } from 'yanhuo-hooks';\n\nconst defaultArray = ['a', 'e', 'i', 'o', 'u'];\n\nexport default function () {\n  const [value, setValue] = useLocalStorageState('use-local-storage-state-demo2', {\n    defaultValue: defaultArray,\n  });\n\n  return (\n    <>\n      <p>{value?.join('-')}</p>\n      <Button\n        style={{ marginRight: '16px' }}\n        onClick={() => setValue([...value, Math.random().toString(36).slice(-1)])}\n      >\n        push random\n      </Button>\n      <Button danger onClick={() => setValue(defaultArray)}>\n        reset\n      </Button>\n    </>\n  );\n}",b="import React from 'react';\nimport { Input, Button } from 'antd';\nimport { useLocalStorageState } from 'yanhuo-hooks';\n\nexport default function () {\n  const [message, setMessage] = useLocalStorageState<string | undefined>(\n    'use-local-storage-state-demo3',\n    {\n      defaultValue: 'Hello~',\n      serializer: (v) => v ?? '',\n      deserializer: (v) => v,\n    },\n  );\n\n  return (\n    <>\n      <Input\n        value={message || ''}\n        placeholder=\"Please enter some words...\"\n        onChange={(e) => setMessage(e.target.value)}\n        style={{ width: 300 }}\n      />\n      <Button style={{ margin: '0 8px' }} onClick={() => setMessage('Hello~')}>\n        Reset\n      </Button>\n      <Button danger onClick={() => setMessage(undefined)}>\n        Clear\n      </Button>\n    </>\n  );\n}",y="import React, { useState, useCallback } from 'react';\nimport { message, Button } from 'antd';\nimport { useMemoizedFn } from 'yanhuo-hooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  const callbackFn = useCallback(() => {\n    message.info(`Current count is ${count}`);\n  }, [count]);\n\n  const memoizedFn = useMemoizedFn(() => {\n    message.info(`Current count is ${count}`);\n  });\n\n  return (\n    <>\n      <p>count: {count}</p>\n      <Button\n        type=\"primary\"\n        onClick={() => {\n          setCount((c) => c + 1);\n        }}\n      >\n        Add Count\n      </Button>\n      <div style={{ marginTop: 16 }}>\n        <Button type=\"primary\" onClick={callbackFn}>\n          call callbackFn\n        </Button>\n        <Button type=\"primary\" onClick={memoizedFn} style={{ marginLeft: 8 }}>\n          call memoizedFn\n        </Button>\n      </div>\n    </>\n  );\n};",C="import React, { useState, useCallback, useRef } from 'react';\nimport { message, Button } from 'antd';\nimport { useMemoizedFn } from 'yanhuo-hooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n\n  const callbackFn = useCallback(() => {\n    message.info(`Current count is ${count}`);\n  }, [count]);\n\n  const memoizedFn = useMemoizedFn(() => {\n    message.info(`Current count is ${count}`);\n  });\n\n  return (\n    <>\n      <p>count: {count}</p>\n      <Button\n        type=\"primary\"\n        onClick={() => {\n          setCount((c) => c + 1);\n        }}\n      >\n        Add Count\n      </Button>\n\n      <p>You can click the button to see the number of sub-component renderings</p>\n\n      <div style={{ marginTop: 32 }}>\n        <h3>Component with useCallback function:</h3>\n        {/* use callback function, ExpensiveTree component will re-render on state change */}\n        <ExpensiveTree showCount={callbackFn} />\n      </div>\n\n      <div style={{ marginTop: 32 }}>\n        <h3>Component with useMemoizedFn function:</h3>\n        {/* use memoized function, ExpensiveTree component will only render once */}\n        <ExpensiveTree showCount={memoizedFn} />\n      </div>\n    </>\n  );\n};\n\n// some expensive component with React.memo\nconst ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {\n  const renderCountRef = useRef(0);\n  renderCountRef.current += 1;\n\n  return (\n    <div>\n      <p>Render Count: {renderCountRef.current}</p>\n      <Button type=\"primary\" onClick={showCount}>\n        showParentCount\n      </Button>\n    </div>\n  );\n});",w="import React from 'react';\nimport { Button } from 'antd';\nimport { useToggle } from 'yanhuo-hooks';\n\nexport default () => {\n  const [state, { toggle, setLeft, setRight }] = useToggle();\n\n  return (\n    <div>\n      <p>Effects\uff1a{`${state}`}</p>\n      <p>\n        <Button type=\"primary\" onClick={toggle}>\n          Toggle\n        </Button>\n        <Button type=\"primary\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Toggle False\n        </Button>\n        <Button type=\"primary\" onClick={setRight}>\n          Toggle True\n        </Button>\n      </p>\n    </div>\n  );\n};",B="import React from 'react';\nimport { Button } from 'antd';\nimport { useToggle } from 'yanhuo-hooks';\n\nexport default () => {\n  const [state, { toggle, set, setLeft, setRight }] = useToggle('Hello', 'World');\n\n  return (\n    <div>\n      <p>Effects\uff1a{state}</p>\n      <p>\n        <Button type=\"primary\" onClick={toggle}>\n          Toggle\n        </Button>\n        <Button type=\"primary\" onClick={() => set('Hello')} style={{ margin: '0 8px' }}>\n          Set Hello\n        </Button>\n        <Button type=\"primary\" onClick={() => set('World')}>\n          Set World\n        </Button>\n        <Button type=\"primary\" onClick={setLeft} style={{ margin: '0 8px' }}>\n          Set Left\n        </Button>\n        <Button type=\"primary\" onClick={setRight}>\n          Set Right\n        </Button>\n      </p>\n    </div>\n  );\n};",x="import { message } from 'antd';\nimport React, { useState } from 'react';\nimport { useUnmount } from 'yanhuo-hooks';\n\nconst MyComponent = () => {\n  useUnmount(() => {\n    message.info('unmount');\n  });\n\n  return <p>Hello World!</p>;\n};\n\nexport default () => {\n  const [state, setState] = useState(true);\n\n  return (\n    <>\n      <button type=\"button\" onClick={() => setState((state) => !state)}>\n        {state ? 'unmount' : 'mount'}\n      </button>\n      {state && <MyComponent />}\n    </>\n  );\n};",S="import React, { useEffect, useState } from 'react';\nimport { Button } from 'antd';\nimport { useUpdateEffect } from 'yanhuo-hooks';\n\nexport default () => {\n  const [count, setCount] = useState(0);\n  const [effectCount, setEffectCount] = useState(0);\n  const [updateEffectCount, setUpdateEffectCount] = useState(0);\n\n  useEffect(() => {\n    setEffectCount((c) => c + 1);\n  }, [count]);\n\n  useUpdateEffect(() => {\n    setUpdateEffectCount((c) => c + 1);\n    return () => {\n      // do something\n    };\n  }, [count]); // you can include deps array if necessary\n\n  return (\n    <div>\n      <p>effectCount: {effectCount}</p>\n      <p>updateEffectCount: {updateEffectCount}</p>\n      <p>\n        <Button type=\"primary\" onClick={() => setCount((c) => c + 1)}>\n          reRender: click count: {count}\n        </Button>\n      </p>\n    </div>\n  );\n};",O={"useboolen-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"CAf6"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:l}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u5207\u6362 boolean\uff0c\u53ef\u4ee5\u63a5\u6536\u9ed8\u8ba4\u503c\u3002</p></div>',identifier:"useboolen-demo1"}},"usecookiestate-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"VoNs"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:">=16.9.0"},"yanhuo-hooks":{version:"1.0.0"},antd:{version:"5.14.0"},"react-dom":{version:">=16.9.0"}},title:"\u5c06 state \u5b58\u50a8\u5728 Cookie \u4e2d",hideActions:["CSB"],description:'<div class="markdown"><p>\u5237\u65b0\u9875\u9762\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u8f93\u5165\u6846\u4e2d\u7684\u5185\u5bb9\u88ab\u4ece Cookie \u4e2d\u6062\u590d\u4e86\u3002</p></div>',identifier:"usecookiestate-demo1"}},"usecookiestate-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"b2g7"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"setState \u53ef\u4ee5\u63a5\u6536\u51fd\u6570",hideActions:["CSB"],description:'<div class="markdown"><p>useCookieState \u7684 setState \u53ef\u4ee5\u63a5\u6536 function updater\uff0c\u5c31\u50cf useState \u90a3\u6837\u3002</p></div>',identifier:"usecookiestate-demo2"}},"usecookiestate-demo3":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"aQ7k"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:m}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u4f7f\u7528 option \u914d\u7f6e Cookie",hideActions:["CSB"],description:'<div class="markdown"><p>\u53ef\u914d\u7f6e\u5c5e\u6027\uff1a\u9ed8\u8ba4\u503c\u3001\u6709\u6548\u65f6\u95f4\u3001\u8def\u5f84\u3001\u57df\u540d\u3001\u534f\u8bae\u3001\u8de8\u57df\u7b49\uff0c\u8be6\u89c1 Options \u6587\u6863\u3002</p></div>',identifier:"usecookiestate-demo3"}},"usedebounce-demo":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"A8p3"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>DebouncedValue \u53ea\u4f1a\u5728\u8f93\u5165\u7ed3\u675f 500ms \u540e\u53d8\u5316\u3002</p></div>',identifier:"usedebounce-demo"}},"usedebouncefn-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"tHpm"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u9891\u7e41\u8c03\u7528 run\uff0c\u4f46\u53ea\u4f1a\u5728\u6240\u6709\u70b9\u51fb\u5b8c\u6210 500ms \u540e\u6267\u884c\u4e00\u6b21\u76f8\u5173\u51fd\u6570</p></div>',identifier:"usedebouncefn-demo1"}},"uselatest-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"OCTU"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"yanhuo-hooks":{version:"1.0.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>useLatest \u8fd4\u56de\u7684\u6c38\u8fdc\u662f\u6700\u65b0\u503c</p></div>',identifier:"uselatest-demo1"}},"uselocalstoragestate-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"VaEu"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u5c06 state \u5b58\u50a8\u5728 localStorage \u4e2d",hideActions:["CSB"],description:'<div class="markdown"><p>\u5237\u65b0\u9875\u9762\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u8f93\u5165\u6846\u4e2d\u7684\u5185\u5bb9\u88ab\u4ece localStorage \u4e2d\u6062\u590d\u4e86\u3002</p></div>',identifier:"uselocalstoragestate-demo1"}},"uselocalstoragestate-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"pd+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:k}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u5b58\u50a8\u6570\u7ec4\u6216\u5bf9\u8c61\u7b49\u590d\u6742\u7c7b\u578b",hideActions:["CSB"],description:'<div class="markdown"><p>useLocalStorageState \u4f1a\u81ea\u52a8\u5904\u7406\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u7684\u64cd\u4f5c\u3002</p></div>',identifier:"uselocalstoragestate-demo2"}},"uselocalstoragestate-demo3":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"3lnb"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u51fd\u6570",hideActions:["CSB"],description:'<div class="markdown"><p>\u5bf9\u4e8e\u666e\u901a\u7684\u5b57\u7b26\u4e32\uff0c\u53ef\u80fd\u4f60\u4e0d\u9700\u8981\u9ed8\u8ba4\u7684 <code>JSON.stringify/JSON.parse</code> \u6765\u5e8f\u5217\u5316\u3002</p></div>',identifier:"uselocalstoragestate-demo3"}},"usememoizedfn-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"yQWC"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:y}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>useMemoizedFn \u4e0e useCallback \u53ef\u4ee5\u5b9e\u73b0\u540c\u6837\u7684\u6548\u679c\u3002</p></div>',identifier:"usememoizedfn-demo1"}},"usememoizedfn-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"lkYe"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:C}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"useMemoizedFn \u51fd\u6570\u5730\u5740\u4e0d\u4f1a\u53d8\u5316\uff0c\u53ef\u4ee5\u7528\u4e8e\u6027\u80fd\u4f18\u5316",hideActions:["CSB"],description:'<div class="markdown"><p>\u793a\u4f8b\u4e2d <code>memoizedFn</code> \u662f\u4e0d\u4f1a\u53d8\u5316\u7684\uff0c<code>callbackFn</code> \u5728 count \u53d8\u5316\u65f6\u53d8\u5316\u3002</p></div>',identifier:"usememoizedfn-demo2"}},"usetoggle-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"82LI"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:w}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u9ed8\u8ba4\u4e3a boolean \u5207\u6362\uff0c\u57fa\u7840\u7528\u6cd5\u4e0e useBoolean \u4e00\u81f4\u3002</p></div>',identifier:"usetoggle-demo1"}},"usetoggle-demo2":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"Dr+N"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:B}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u5728\u4efb\u610f\u4e24\u4e2a\u503c\u4e4b\u95f4\u5207\u6362",hideActions:["CSB"],description:'<div class="markdown"><p>\u63a5\u53d7\u4e24\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u5728\u5b83\u4eec\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\u3002</p></div>',identifier:"usetoggle-demo2"}},"useunmount-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"y7Gi"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:x}},dependencies:{antd:{version:"5.14.0"},react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\uff0c\u6267\u884c\u51fd\u6570\u3002</p></div>',identifier:"useunmount-demo1"}},"useupdateeffect-demo1":{component:Object(c["dynamic"])({loader:function(){var e=Object(i["a"])(Object(u["a"])().mark((function e(){return Object(u["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(1),t.e(19),t.e(4)]).then(t.bind(null,"vcr8"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:S}},dependencies:{react:{version:"^16.8.0 || ^17.0.0 || ^18.0.0"},antd:{version:"5.14.0"},"yanhuo-hooks":{version:"1.0.0"},"react-dom":{version:">=16.9.0"}},title:"\u57fa\u7840\u7528\u6cd5",hideActions:["CSB"],description:'<div class="markdown"><p>\u4f7f\u7528\u4e0a\u4e0e useEffect \u5b8c\u5168\u76f8\u540c\uff0c\u53ea\u662f\u5b83\u5ffd\u7565\u4e86\u9996\u6b21\u6267\u884c\uff0c\u53ea\u5728\u4f9d\u8d56\u9879\u66f4\u65b0\u65f6\u6267\u884c\u3002</p></div>',identifier:"useupdateeffect-demo1"}}},j=t("Zs1V"),R=t("72cl"),P=t.n(R);n["default"]=e=>s.a.createElement(P.a,Object(o["a"])({},e,{config:a,demos:O,apis:j}))},RGYn:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"Home","meta":{}}],"/guide":[{"title":"\u4ecb\u7ecd","path":"/guide"}],"/hooks":[{"title":"\u751f\u547d\u5468\u671f","children":[{"path":"/hooks/use-unmount","title":"useUnmount \u7ec4\u4ef6\u5378\u8f7d"}]},{"title":"\u72b6\u6001","children":[{"path":"/hooks/use-toggle","title":"useToggle \u72b6\u6001\u95f4\u5207\u6362"},{"path":"/hooks/use-cookie-state","title":"useCookieState Cookie\u5b58\u50a8"},{"path":"/hooks/use-boolen","title":"useBoolean Boolean\u72b6\u6001\u7ba1\u7406"},{"path":"/hooks/use-debounce","title":"useDebounce \u9632\u6296"},{"path":"/hooks/use-local-storage-state","title":"useLocalStorageState"}]},{"title":"Effect","children":[{"path":"/hooks/use-debounce-fn","title":"useDebounceFn \u9632\u6296\u51fd\u6570"},{"path":"/hooks/use-update-effect","title":"useUpdateEffect \u4f9d\u8d56\u66f4\u65b0"}]},{"title":"\u8fdb\u9636","children":[{"path":"/hooks/use-memoized-fn","title":"useMemoizedFn \u6301\u4e45\u5316 Fn"},{"path":"/hooks/use-latest","title":"useLatest \u83b7\u53d6\u6700\u65b0Hook"}]}],"/":[{"title":"\u9996\u9875","path":"index"}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u6307\u5357","path":"/guide"},{"title":"Hooks","path":"/hooks"},{"title":"GitHub","path":"https://github.com/Ruo-qi/yanhuo-hooks"}]},"title":"YANHUO \u7ec4\u4ef6\u5e93","logo":"/yanhuo-hooks/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);