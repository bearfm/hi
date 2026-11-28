# _plugins/image_grid.rb
# 用法：
# {% image_grid cols=2 %}
# ![说明1](/img/a.jpg)
# ![说明2](/img/b.jpg)
# {% endimage_grid %}
#
# 单图带说明：
# {% image_caption %}![说明](/img/a.jpg){: .w-75}{% endimage_caption %}

module Jekyll
  class ImageGridTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @cols = 1
      @lightbox_group = nil
      
      # 解析参数 cols=2 group=xxx
      markup.scan(/(\w+)=([^\s]+)/) do |key, value|
        case key
        when 'cols' then @cols = value.to_i
        when 'group' then @lightbox_group = value
        end
      end
      
      # 如果没有指定 group，自动生成一个唯一 ID
      @lightbox_group ||= "grid-#{Time.now.to_i}"
    end

    def render(context)
      content = super.strip
      # 用 Markdown 解析内容（支持图片语法）
      html = context.registers[:site].find_converter_instance(
        Jekyll::Converters::Markdown
      ).convert(content)
      
      # 给每个 img 外面包一层 lightbox 链接
      idx = 0
      html = html.gsub(/<img([^>]+)src="([^"]+)"([^>]*)>/) do |match|
        pre_attrs = $1
        src = $2
        post_attrs = $3
        alt_match = post_attrs.match(/alt="([^"]*)"/)
        alt = alt_match ? alt_match[1] : ""
        
        # 提取 title 作为 data-title
        title_match = post_attrs.match(/title="([^"]*)"/)
        title = title_match ? title_match[1] : alt
        
        idx += 1
        <<~HTML
          <a href="#{src}" data-lightbox="#{@lightbox_group}" data-title="#{title}">
            <img#{pre_attrs}src="#{src}"#{post_attrs}>
          </a>
        HTML
      end
      
      <<~HTML
        <div class="image-grid image-grid-#{@cols}">
          #{html}
        </div>
      HTML
    end
  end

  class ImageCaptionTag < Liquid::Block
    def render(context)
      content = super.strip
      html = context.registers[:site].find_converter_instance(
        Jekyll::Converters::Markdown
      ).convert(content)
      
      # 提取 img 标签和 alt/title
      img_match = html.match(/<img([^>]+)src="([^"]+)"([^>]*)>/)
      return html unless img_match
      
      pre_attrs = img_match[1]
      src = img_match[2]
      post_attrs = img_match[3]
      
      alt_match = post_attrs.match(/alt="([^"]*)"/)
      alt = alt_match ? alt_match[1] : ""
      title_match = post_attrs.match(/title="([^"]*)"/)
      title = title_match ? title_match[1] : alt
      
      # 提取额外的 class（如 .w-75）
      class_match = post_attrs.match(/class="([^"]*)"/)
      extra_class = class_match ? class_match[1] : ""
      
      <<~HTML
        <figure class="image-figure #{extra_class}">
          <a href="#{src}" data-lightbox="single-#{Time.now.to_i}" data-title="#{title}">
            <img#{pre_attrs}src="#{src}"#{post_attrs.sub(/class="[^"]*"/, '').strip}>
          </a>
          #{title.empty? ? '' : "<figcaption>#{title}</figcaption>"}
        </figure>
      HTML
    end
  end
end

Liquid::Template.register_tag('image_grid', Jekyll::ImageGridTag)
Liquid::Template.register_tag('image_caption', Jekyll::ImageCaptionTag)