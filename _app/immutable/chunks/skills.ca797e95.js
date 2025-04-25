import{A as e}from"./UIcon.abdbb3c3.js";const u=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function d(t,...a){const n=Object.assign({},t);return Object.keys(n).forEach(s=>{a.includes(s)&&delete n[s]}),n}const r=t=>t,p=[r({name:"Programming Languages",slug:"pro-lang"}),r({name:"Frameworks",slug:"framework"}),r({name:"Libraries",slug:"library"}),r({name:"Languages",slug:"lang"}),r({name:"Databases",slug:"db"}),r({name:"ORMs",slug:"orm"}),r({name:"DevOps",slug:"devops"}),r({name:"Testing",slug:"test"}),r({name:"Dev Tools",slug:"devtools"}),r({name:"Markup & Style",slug:"markup-style"}),r({name:"Design",slug:"design"}),r({name:"Soft Skills",slug:"soft"})],o=t=>{const a=d(t,"category");return t.category&&(a.category=p.find(n=>n.slug===t.category)),a},c=[o({slug:"js",color:"yellow",description:"",logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"ts",color:"blue",description:"",logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),o({slug:"css",color:"blue",description:"",logo:e.CSS,name:"CSS",category:"markup-style"}),o({slug:"html",color:"orange",description:"",logo:e.HTML,name:"HTML",category:"markup-style"}),o({slug:"sass",color:"pink",description:"",logo:e.Sass,name:"Sass",category:"markup-style"}),o({slug:"react",color:"cyan",description:"",logo:e.ReactJs,name:"React",category:"library"}),o({slug:"svelte",color:"orange",description:u,logo:e.Svelte,name:"Svelte",category:"library"}),o({slug:"angular",color:"red",description:"",logo:e.Angular,name:"Angular",category:"framework"}),o({slug:"ruby",color:"red",description:"",logo:e.Ruby,name:"Ruby",category:"pro-lang"}),o({slug:"rails",color:"red",description:"",logo:e.RoR,name:"Ruby on Rails",category:"framework"}),o({slug:"jquery",color:"cyan",description:"",logo:e.Jquery,name:"Jquery",category:"library"}),o({slug:"shopify",color:"green",description:"",logo:e.Shopify,name:"Shopify",category:"devtools"}),o({slug:"jest",color:"red",description:"",logo:e.Jest,name:"Jest",category:"test"}),o({slug:"vite",color:"orange",description:"",logo:e.Vite,name:"Vite",category:"devtools"}),o({slug:"docker",color:"blue",description:"",logo:e.Docker,name:"Docker",category:"devops"}),o({slug:"git",color:"orange",description:"",logo:e.Git,name:"Git",category:"devtools"}),o({slug:"comptabilite",color:"black",description:"",logo:e.Compta,name:"Comptabilité",category:"soft"}),o({slug:"gdp",color:"blue",description:"",logo:e.GestiondeProjet,name:"Gestion de Projet",category:"soft"}),o({slug:"java",color:"white",description:"",logo:e.Java,name:"Java",category:"pro-lang"}),o({slug:"c",color:"blue",description:"",logo:e.C,name:"C",category:"pro-lang"}),o({slug:"csharpe",color:"purple",description:"",logo:e.Csharp,name:"C#",category:"pro-lang"}),o({slug:"androidstudio",color:"blue",description:"",logo:e.AndroidStudio,name:"Android Studio",category:"devtools"}),o({slug:"python",color:"yellow",description:"",logo:e.Python,name:"Python",category:"pro-lang"}),o({slug:"numpy",color:"cyan",description:"",logo:e.Numpy,name:"Numpy",category:"library"}),o({slug:"pandas",color:"white",description:"",logo:e.Pandas,name:"Pandas",category:"library"}),o({slug:"flask",color:"black",description:"",logo:e.Flask,name:"Flask",category:"framework"}),o({slug:"tkinter",color:"blue",description:"",logo:e.TKinter,name:"Tkinter",category:"library"}),o({slug:"aws",color:"orange",description:"",logo:e.AWS,name:"AWS",category:"devops"}),o({slug:"matlab",color:"blue",description:"",logo:e.Matlab,name:"Matlab",category:"pro-lang"}),o({slug:"spring",color:"green",description:"",logo:e.Spring,name:"Spring",category:"framework"})],y="Skills",b=(...t)=>c.filter(a=>t.includes(a.slug)),h=t=>{const a=[],n=[];return c.forEach(s=>{if(t.trim()&&!s.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!s.category){n.push(s);return}let l=a.find(g=>{var i;return g.category.slug===((i=s.category)==null?void 0:i.slug)});l||(l={items:[],category:s.category},a.push(l)),l.items.push(s)}),n.length!==0&&a.push({category:{name:"Others",slug:"others"},items:n}),a};export{h as a,b as g,c as i,y as t};
