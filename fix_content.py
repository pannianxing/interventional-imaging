import re

with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 找出所有有问题的文章：content 字段里包含 ``` 的模板字符串
# 策略：把 content 里所有 ``` 替换成 ====（或者直接移除代码块标记，保留内容）

# 我们逐个处理公众号文章
# 先找到所有 wxart 的 content 起止位置
pattern = r"(id: 'wxart-\d+'.*?content: `)([\s\S]*?)(`\s*publishDate:)"

def fix_content(match):
    prefix = match.group(1)
    article_content = match.group(2)
    suffix = match.group(3)
    
    # 如果内容里有 ```，需要处理
    if '```' in article_content:
        # 移除所有 ``` 标记
        article_content = article_content.replace('```\n', '')
        article_content = article_content.replace('\n```', '')
        article_content = article_content.replace('```', '')
        print(f"Fixed code blocks in article")
    
    return prefix + article_content + suffix

new_content, count = re.subn(pattern, fix_content, content)
print(f"Processed {count} articles")

with open('src/data/mockData.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done!")
