(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[8610],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var l=a(7294),r=a(6010),s=a(3905),n=a(4973),m=a(6742),i=a(3541),c=a(1217),o="blogPostTitle_GeHD",g="blogPostDate_fNvV",u=a(6700);var d=function(e){const t=function(){const{selectMessage:e}=(0,u.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:d,metadata:p,truncated:h,isBlogPostPage:E=!1}=e,{date:b,formattedDate:_,permalink:v,tags:N,readingTime:f}=p,{author:k,title:Z,image:T,keywords:w}=d,P=d.author_url||d.authorURL,M=d.author_title||d.authorTitle,y=d.author_image_url||d.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:w,image:T}),l.createElement("article",{className:E?void 0:"margin-bottom--xl"},(()=>{const e=E?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:(0,r.Z)("margin-bottom--sm",o)},E?Z:l.createElement(m.Z,{to:v},Z)),l.createElement("div",{className:"margin-vert--md"},l.createElement("time",{dateTime:b,className:g},_,f&&l.createElement(l.Fragment,null," \xb7 ",t(f)))),l.createElement("div",{className:"avatar margin-vert--md"},y&&l.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:P},l.createElement("img",{src:y,alt:k})),l.createElement("div",{className:"avatar__intro"},k&&l.createElement(l.Fragment,null,l.createElement("h4",{className:"avatar__name"},l.createElement(m.Z,{href:P},k)),l.createElement("small",{className:"avatar__subtitle"},M)))))})(),l.createElement("div",{className:"markdown"},l.createElement(s.Zo,{components:i.Z},a)),(N.length>0||h)&&l.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&l.createElement("div",{className:"col"},l.createElement("strong",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),N.map((({label:e,permalink:t})=>l.createElement(m.Z,{key:t,className:"margin-horiz--sm",to:t},e)))),h&&l.createElement("div",{className:"col text--right"},l.createElement(m.Z,{to:p.permalink,"aria-label":`Read more about ${Z}`},l.createElement("strong",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var l=a(7294),r=a(6010),s=a(6742),n="sidebar_2ahu",m="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",c="sidebarItem_2UVv",o="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";function u({sidebar:e}){return 0===e.items.length?null:l.createElement("div",{className:(0,r.Z)(n,"thin-scrollbar")},l.createElement("h3",{className:m},e.title),l.createElement("ul",{className:i},e.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:g},e.title))))))}},9404:function(e,t,a){"use strict";a.r(t);var l=a(7294),r=a(3066),s=a(3146),n=a(6742),m=a(5601),i=a(4973),c=a(6700);function o({tagName:e,count:t}){const a=function(){const{selectMessage:e}=(0,c.c2)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return l.createElement(i.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:a(t),tagName:e}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){const{metadata:t,items:a,sidebar:g}=e,{allTagsPath:u,name:d,count:p}=t;return l.createElement(r.Z,{title:`Posts tagged "${d}"`,description:`Blog | Tagged "${d}"`,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--3"},l.createElement(m.Z,{sidebar:g})),l.createElement("main",{className:"col col--7"},l.createElement("h1",null,l.createElement(o,{count:p,tagName:d})),l.createElement(n.Z,{href:u},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.createElement("div",{className:"margin-vert--xl"},a.map((({content:e})=>l.createElement(s.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},l.createElement(e,null)))))))))}}}]);