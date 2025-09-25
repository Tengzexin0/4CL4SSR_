// DNS配置
const dnsConfig = {
    "enable": true,
    "ipv6": false,
    "listen": "0.0.0.0:1053",
    "respect-rules": true,
    "use-system-hosts": false,
    "cache-algorithm": "arc",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": [
        // 本地主机/设备
        "+.lan",
        "+.local",
        // Windows网络出现小地球图标
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        // QQ快速登录检测失败
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com",
        // 追加以下条目
        "+.in-addr.arpa",
        "+.ip6.arpa",
        "time.*.com",
        "time.*.gov",
        "pool.ntp.org",
        // 微信快速登录检测失败
        "localhost.work.weixin.qq.com"
    ],
    "default-nameserver":['https://223.5.5.5/dns-query', 'https://119.29.29.29/dns-query'],
    "nameserver": ['https://doh.dns.sb/dns-query', 'https://dns.cloudflare.com/dns-query', 'https://dns.twnic.tw/dns-query', 'tls://8.8.4.4:853'],
    "proxy-server-nameserver": ['https://223.5.5.5/dns-query', 'https://119.29.29.29/dns-query'], // 代理流量下使用国内 DoH，确保分流
    "direct-nameserver": ["https://223.5.5.5/dns-query",'https://119.29.29.29/dns-query'], // 直连流量下使用国内 DoH
    "nameserver-policy": {  // 关键修复：针对国内/私有域名使用国内 DoH
        "geosite:private,cn": [
            "https://223.5.5.5/dns-query",
            "https://doh.pub/dns-query"
        ]
    }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "banad": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Advertise/BanAD.list",
    "path": "./ruleset/loyalsoldier/banad.yaml"
  },
  "banprogramad": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Advertise/BanProgramAD.list",
    "path": "./ruleset/loyalsoldier/banprogramad.yaml"
  },
  "banprogramad1": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Advertise/BanProgramAD1.list",
    "path": "./ruleset/loyalsoldier/banprogramad1.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "unban": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Domestic/UnBan.list",
    "path": "./ruleset/loyalsoldier/unban.yaml"
  },
  "unban1": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Domestic/UnBan1.list",
    "path": "./ruleset/loyalsoldier/unban1.yaml"
  },
  "googlecn": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Domestic/GoogleCN.list",
    "path": "./ruleset/loyalsoldier/googlecn.yaml"
  },
  "steamcn": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Domestic/SteamCN.list",
    "path": "./ruleset/loyalsoldier/steamcn.yaml"
  },
  "chinadomain": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Domestic/ChinaDomain.list",
    "path": "./ruleset/loyalsoldier/chinadomain.yaml"
  },
  "chinacompanyip": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Domestic/ChinaCompanyIp.list",
    "path": "./ruleset/loyalsoldier/chinacompanyip.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "proxygfwlist": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/ProxyGFWlist.list",
    "path": "./ruleset/loyalsoldier/proxygfwlist.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "openai": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/loyalsoldier/openai.yaml"
  },
  "bilibili": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Domestic/Bilibili.list",
    "path": "./ruleset/blackmatrix7/bilibili.yaml"
  },
  "bilibilihmt": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Domestic/BilibiliHMT.list",
    "path": "./ruleset/blackmatrix7/bilibilihmt.yaml"
  },
  "ai": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/AI.list",
    "path": "./ruleset/blackmatrix7/ai.yaml"
  },
  "netflix": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/Netflix.list",
    "path": "./ruleset/blackmatrix7/netflix.yaml"
  },
  "disney+": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/Tengzexin0/4CL4SSR_/main/Clash/DisneyPlus.list",
    "path": "./ruleset/blackmatrix7/disney+.yaml"
  }
};
// 规则
const rules = [
  // 自定义规则
  "DOMAIN-SUFFIX,googleapis.cn,节点选择", // Google服务
  "DOMAIN-SUFFIX,gstatic.com,节点选择", // Google静态资源
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,节点选择", // Google Play下载服务
  "DOMAIN-SUFFIX,github.io,节点选择", // Github Pages
  "DOMAIN,v2rayse.com,节点选择", // V2rayse节点工具
  // "DOMAIN,doh.pub,节点选择",  // 可显式添加 doh.pub 规则，确保其连接走代理【可选】
  // Loyalsoldier 规则集
  "RULE-SET,applications,墙内直连",
  "RULE-SET,private,墙内直连",
  "RULE-SET,unban,墙内直连",
  "RULE-SET,unban1,墙内直连",
  "RULE-SET,reject,广告过滤",
  "RULE-SET,banprogramad1,广告过滤",
  "RULE-SET,banprogramad,广告过滤",
  "RULE-SET,banad,广告过滤",
  "RULE-SET,googlecn,墙内直连",
  "RULE-SET,steamcn,墙内直连",
  "RULE-SET,icloud,微软服务",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,google,谷歌服务",
  "RULE-SET,proxy,节点选择",
  "RULE-SET,gfw,节点选择",
  "RULE-SET,proxygfwlist,节点选择",
  "RULE-SET,tld-not-cn,节点选择",
  "RULE-SET,direct,墙内直连",
  "RULE-SET,lancidr,墙内直连,no-resolve",
  "RULE-SET,cncidr,墙内直连,no-resolve",
  "RULE-SET,telegramcidr,Telegram,no-resolve",
  "RULE-SET,bilibilihmt,Bilibili",
  "RULE-SET,bilibili,Bilibili",
  "RULE-SET,openai,ChatGPT",
  "RULE-SET,ai,AI",
  "RULE-SET,netflix,Netflix",
  "RULE-SET,disney+,Disney+",
  "RULE-SET,chinadomain,墙内直连",
  "RULE-SET,chinacompanyip,墙内直连",
  // 其他规则
  "GEOSITE,CN,墙内直连",  // 添加 GEOSITE,CN 规则，提高国内域名的覆盖率
  "GEOIP,LAN,墙内直连,no-resolve",
  "GEOIP,CN,墙内直连,no-resolve",
  "MATCH,漏网之鱼"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "http://www.gstatic.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};
// Define main function (script entry)
function main(config, profileName) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

// 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;


// 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "节点选择",
      "type": "select",
      "proxies": ["延迟选优", "HK", "TW", "US", "KR", "JP", "SG", "其他"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/heart.svg"
    },
    {
      ...groupBaseOption,
      "name": "延迟选优",
      "type": "url-test",
      "tolerance": 100,
      "include-all": true,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/speed.svg"
    },
    {
      ...groupBaseOption,
      "name": "落地指定",
      "type": "select",
      "include-all": true,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/departure.svg"
    },
    {
      ...groupBaseOption,
      "name": "Bilibili",
      "type": "select",
      "proxies": ["墙内直连", "节点选择", "延迟选优", "HK", "TW"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/bilibili.svg"
    },
    {
      ...groupBaseOption,
      "name": "AI",
      "type": "select",
      "proxies": ["节点选择", "延迟选优", "墙内直连", "HK", "TW", "US", "KR", "JP", "SG", "其他"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/omelette.svg"
    },
    {
      ...groupBaseOption,
      "url": "https://chatgpt.com",
      "expected-status": "200",
      "name": "ChatGPT",
      "type": "select",
      "proxies": ["节点选择", "延迟选优", "HK", "TW", "US", "KR", "JP", "SG", "其他"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/chatgpt.svg"
    },
    {
      ...groupBaseOption,
      "name": "Telegram",
      "type": "select",
      "proxies": ["节点选择", "延迟选优", "落地指定"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/telegram.svg"
    },
    {
      ...groupBaseOption,
      "name": "Netflix",
      "type": "select",
      "proxies": ["节点选择", "延迟选优", "落地指定"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/netflix.svg"
    },
    {
      ...groupBaseOption,
      "name": "Disney+",
      "type": "select",
      "proxies": ["节点选择", "延迟选优", "落地指定"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/disney.svg"
    },
    {
      ...groupBaseOption,
      "name": "墙内直连",
      "type": "select",
      "proxies": ["DIRECT", "节点选择", "延迟选优", "落地指定"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/sushi.svg"
    },
    {
      ...groupBaseOption,
      "name": "US",
      "type": "url-test",
      "url": "https://i.ytimg.com/generate_204",
      "interval": 30,
      "tolerance": 100,
      "include-all": true,
      "filter": "(🇺🇸|🇺🇲)(?!.*[🇦-🇿]{2})",
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/us.svg"
    },
    {
      ...groupBaseOption,
      "name": "JP",
      "type": "url-test",
      "url": "https://i.ytimg.com/generate_204",
      "interval": 30,
      "tolerance": 100,
      "include-all": true,
      "filter": "🇯🇵(?!.*[🇦-🇿]{2})",
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/jp.svg"
    },
    {
      ...groupBaseOption,
      "name": "HK",
      "type": "url-test",
      "url": "https://i.ytimg.com/generate_204",
      "interval": 30,
      "tolerance": 100,
      "include-all": true,
      "filter": "🇭🇰(?!.*(?!🇨🇳)[🇦-🇿]{2})",
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/hk.svg"
    },
    {
      ...groupBaseOption,
      "name": "TW",
      "type": "url-test",
      "url": "https://i.ytimg.com/generate_204",
      "interval": 30,
      "tolerance": 100,
      "include-all": true,
      "filter": "(🇹🇼|TW|Taiwan)(?!.*(?!🇨🇳)[🇦-🇿]{2})",
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/tw.svg"
    },
    {
      ...groupBaseOption,
      "name": "KR",
      "type": "url-test",
      "url": "https://i.ytimg.com/generate_204",
      "interval": 30,
      "tolerance": 100,
      "include-all": true,
      "filter": "🇰🇷(?!.*[🇦-🇿]{2})",
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/kr.svg"
    },
    {
      ...groupBaseOption,
      "name": "SG",
      "type": "url-test",
      "url": "https://i.ytimg.com/generate_204",
      "interval": 30,
      "tolerance": 100,
      "include-all": true,
      "filter": "🇸🇬(?!.*[🇦-🇿]{2})",
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/sg.svg"
    },
    {
      ...groupBaseOption,
      "name": "其他",
      "type": "url-test",
      "url": "https://i.ytimg.com/generate_204",
      "interval": 30,
      "tolerance": 100,
      "include-all": true,
      "filter": "^(?!.*(🇨🇳|🇭🇰|🇲🇴|🇹🇼|🇸🇬|🇯🇵|🇺🇸|🇺🇲)(?!.*[🇦-🇿]{2}))",
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/adjust.svg"
    },
     {
      ...groupBaseOption,
      "name": "谷歌服务",
      "type": "select",
      "proxies": ["节点选择", "延迟选优", "落地指定", "墙内直连"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/google.svg"
    },
    {
      ...groupBaseOption,
      "name": "苹果服务",
      "type": "select",
      "proxies": ["节点选择", "延迟选优", "落地指定"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/apple.svg"
    },
    {
      ...groupBaseOption,
      "name": "微软服务",
      "type": "select",
      "proxies": ["墙内直连", "节点选择", "延迟选优", "落地指定"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/microsoft.svg"
    },
    {
      ...groupBaseOption,
      "name": "广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/advertise.svg"
    },
    {
      ...groupBaseOption,
      "name": "漏网之鱼",
      "type": "select",
      "proxies": ["节点选择", "延迟选优", "墙内直连", "广告过滤"],
      "include-all": false,
      "icon": "https://cdn.jsdelivr.net/gh/Tengzexin0/jsdelivrcdn_repository@main/assets/icons/fish.svg"
    }
  ];
  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;
  return config;
}
