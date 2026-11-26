---
layout: page
title: 能找到你想要的吗？
permalink: /search/
comments: true
---

<!-- 搜索框区域 -->
<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
            <div class="input-group input-group-lg shadow-sm rounded-3 overflow-hidden">
                <span class="input-group-text bg-white border-end-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search text-muted" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </span>
                <input type="text" id="search-input" class="form-control border-start-0" placeholder="输入关键词搜索文章..." aria-label="Search" autocomplete="off">
            </div>
        </div>
    </div>
</div>

<!-- 搜索结果展示区域 -->
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
            <!-- 结果统计提示（可选） -->
            <div id="search-status" class="text-muted small mb-3 d-none"></div>
            
            <!-- 结果列表容器 -->
            <ul id="results-container" class="list-group list-group-flush shadow-sm rounded-3 overflow-hidden"></ul>
        </div>
    </div>
</div>
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
        <img src="https://cos.ezradio.net/post/5919ee669e1d2a4f0cf2522f5f01fb9c.avif?imageSlim"/>
         </div>
    </div>
</div>       
<!-- 引入你托管的 simple-jekyll-search 脚本并初始化 -->
<script src="https://cos.ezradio.net/ajax/libs/simple-jekyll-search/1.9.2/simple-jekyll-search.min.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    window.simpleJekyllSearch = new SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json', // 确保你的根目录有 search.json
      searchResultTemplate: `
        <li class="list-group-item list-group-item-action p-4 border-bottom">
            <a href="{url}" class="text-decoration-none d-block">
                <h5 class="mb-1 text-primary">{title}</h5>
                <div class="small text-muted mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-calendar3 me-1" viewBox="0 0 16 16">
                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                    </svg>
                    {date}
                </div>
                <p class="mb-0 text-secondary small text-truncate-2">{content}</p>
            </a>
        </li>
      `,
      noResultsText: '<li class="list-group-item text-center text-muted py-4">没有找到相关的文章，换个关键词试试吧~</li>',
      limit: 20, // 最多显示20条结果
      fuzzy: true, // 开启模糊搜索，容错率更高
      templateMiddleware: function(prop, value, template) {
        // 处理日期格式，只显示年月日
        if (prop === 'date') {
            return value.substring(0, 10);
        }
        // 处理内容摘要，去除HTML标签并截取
        if (prop === 'content') {
            if (!value) return '';
            // 简单去除HTML标签
            var text = value.replace(/<[^>]*>?/gm, '');
            // 截取前100个字符
            return text.length > 100 ? text.substring(0, 100) + '...' : text;
        }
      }
    });
  });
</script>

<style>
  /* 简单的两行文本截断 */
  .text-truncate-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  /* 搜索框聚焦时的阴影效果 */
  .input-group:focus-within {
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25) !important;
  }
</style>