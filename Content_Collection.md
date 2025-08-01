
## Notes / To Do 


Three prompt types 
- System, User, Agent 
- All three get used each time you send a message 
- "Great job. Now do the same thing for (new topic)"


---
## Home / About 




---

## What is AI 

### Model Training 
(help: rewrite. Between 100 to 150 words)
Trained on billions of text examples (books, articles, websites). Learned patterns: grammar, facts, reasoning, style.

Companies gather billions of documents… Books, every Wikipedia article, websites, research papers - and feed them through thousands of powerful computers for months. We're talking over 100 million dollars just to train one model like ChatGPT. But what the computer is actually doing is learning patterns - not memorizing facts, but understanding how human language works; and the patterns of human thought.

### Fine Tuning
(help: expand and rewrite. Between  100 to 150 words)
Teach the model to have helpful conversations. Trained on examples of good AI responses.

### Alignment 
(help: expand and rewrite. Between  100 to 150 words)
Then, they test and review it for quality and safety—to make sure it doesn't tell people to do illegal things.


### Response Generation 
(help:  rewrite. Between  100 to 150 words)
Extensive testing and refinement. Human reviewers rate responses for quality and safety.

Then, when it's ready and they release it to the public, you send it a request. And it generates responses one word at a time. For each word, it then thinks 'Based on all the patterns I’ve learned and the current conversation we are having, what word comes next?' Think of it like super-powered autocomplete. It’s choosing the word it thinks should come next based on the patterns that it learned in its training in the first step. And it does that for the next word, and the next word, until it feels that the answer is complete.





---


## When to use AI and when to not use AI 

### When Use AI 
There are several types of work where AI can be particularly useful, given the current capabilities and limitations of LLMs.

1. Work that requires quantity. For example, the number of ideas you generate determines the quality of the best idea. You want to generate a lot of ideas in any brainstorming session. Most people stop after generating just a few ideas because they become exhausted but, [the AI can provide hundreds that do not meaningfully repeat](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4708466).[1](https://www.oneusefulthing.org/p/15-times-to-use-ai-and-5-not-to#footnote-1-152600543)
    
2. Work where you are an expert and can assess quickly whether AI is good or bad. This can involve complicated and exacting work, but it relies on your expertise to determine whether the AI is providing valuable outputs. For example, o1, the new AI model from OpenAI, can solve some PhD-level problems, but it can be hard to know whether its answers are useful without being an expert yourself.
    
3. Work that involves summarizing large amounts of information, but where the downside of errors is low, and you are not expected to have detailed knowledge of the underlying information. AI is [good at summarizing novel-length work](https://arxiv.org/pdf/2404.01261), but less successful at fact-checking it.
    
4. Work that is mere translation between frames or perspectives. For example, you have developed a policy but now have to turn it into a dozen different training documents for different audiences in your organization. AI is very good at this sort of translation, [increasing and decreasing complexity of documents so that people can understand them](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2810364).
    
5. Work that will keep you moving forward. Little things often block our way, and a push might be all we need to accomplish it. When writing prior to AI, I might get stuck on a sentence and walk away from writing for an hour, but now I ask AI _give me thirty distinct ways to end this sentence_.  30 ways to end the sentence. I would likely not use any of them verbatim, but they may unlock some ways forward I may not have thought of.
    
6. Work that contains some elements that you can understand but need help on the context or details. [Tyler Cowen suggests using the AI as a companion when reading](https://marginalrevolution.com/marginalrevolution/2024/12/how-to-read-a-book-using-o1.html), because it allows you to ask infinite questions.
    
7. Work where you need variance, and where you will select the best answer as an editor or curator. Asking for a variety of solutions - _give me 15 ways to rewrite this bullet in radically different styles, be creative_ - allows you to find ideas that might be interesting.
    
    _give me 15 ways to rewrite this bullet in radically different styles, be creative_
    
8. Work that research shows that AI is almost certainly helpful in - [many kinds of coding](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4945566), for example.
    
9. Work where you need a first pass view at what a hostile, friendly, or naive recipient might think.
    
    [
    
    ![[00_Core/System/Attachments/Content Collection/fac824d0b44d0f2bd47e1eb6a6c0be54_MD5.jpg]]
    
    
    
    ](https://substackcdn.com/image/fetch/$s_!EvLZ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6df196a6-2a33-495d-81ca-13c64b0175f7_913x681.png)
    
10. Work that is entrepreneurial, where you are expected to stretch your expertise widely over many different disciplines, and where the alternative to a good-enough partner is to not be able to act at all. AI can be a surprisingly competent co-founder, helping give mentorship while also acting to build the documents, demos, and approaches that are otherwise likely to be outside your experience.
    
11. Work where you need a specific perspective, and where a simulated first pass from that perspective can be helpful, like reactions from [fictional personas](https://www.interaction-design.org/literature/topics/personas).
    
12. Work that is mere ritual, long severed from its purpose (like certain standardized reports that no one reads). What, [in the words of Bob Sutton and Huggy Rao](https://hbr.org/2024/01/rid-your-organization-of-obstacles-that-infuriate-everyone), scatters your attention and makes you less valuable? What work serves no useful purpose? In an ideal world, you would remove the work, but you can at least reduce its hold on you by having AI help. (Though make sure this is indeed the case, far too many people automate performance reviews, for example, which are meaningful only when done by a human)
    
13. Work where you want a second opinion. Give an AI access to the data and see if reaches the same conclusion.

14. I often use LLMs for format conversion. From raw notes to a table, list to CSV, etc. Simple yet powerful and saves time.
    
15. Work that AIs can do better than humans. [This is likely to be the fastest-growing category.](https://www.oneusefulthing.org/p/the-present-future-ais-impact-long)

### Don't Use AI 
We can set aside the obvious scenarios - using AI for illegal purposes, in high-stakes situations where errors could be catastrophic, or for decisions that ethically require human work. Beyond these clear-cut cases here are 5 times not to use AI: 
1. When you need to learn and synthesize new ideas or information. Asking for a summary is not the same as reading for yourself. Asking AI to solve a problem for you is not an effective way to learn, even if it feels like it should be. To learn something new, you are going to have to do the reading and thinking yourself, though [you may still find an AI helpful for parts of the learning process](https://www.oneusefulthing.org/p/post-apocalyptic-education).
    
2. When very high accuracy is required. The problem with AI errors, the infamous hallucinations, is that, because of how LLMs work, the errors are going to be very plausible. Hallucinations are therefore very hard to spot, and research suggests that people don’t even try, [“falling asleep at the wheel”](https://www.almendron.com/tribuna/wp-content/uploads/2023/09/falling-asleep-at-the-whee.pdf) and not paying attention. Hallucinations can be reduced, but not eliminated. (However, many tasks in the real world are tolerant of error - humans make mistakes, too - and it may be that AI is less error-prone than humans in certain cases)
    
3. When you do not understand the failure modes of AI. AI doesn’t fail exactly like a human. You know it can hallucinate, but that is only one form of error: AIs often try to persuade you that they are right, or they might become sycophantic and agree with your incorrect answer. You need to use AI enough to understand these risks.
    
4. When the effort is the point. In many areas, people need to struggle with a topic to succeed - writers rewrite the same page, academics revisit a theory many times. By shortcutting that struggle, no matter how frustrating, you may lose the ability to reach the vital “aha” moment. A certain amount of friction seems necessary to make facts stick in the mind, and keep them from slipping down the memory hole.

5. 1. When AI is bad. This may seem obvious, but AI is bad at things you wouldn’t expect (counting the number of r’s in the word “strawberry”) and good at things you wouldn’t expect (writing a Shakespearean sonnet about how hard it is to count the number of r’s in the word strawberry where the first letter of every line spells out two fruits). Unfortunately, there is no general manual to tell you the shape of the [Jagged Frontier of AI abilities](https://www.oneusefulthing.org/p/centaurs-and-cyborgs-on-the-jagged), which are constantly evolving. Trial and error, and sharing information with peers, is vital to figuring this out.



###  Mindset Needed / Its' not Google 

The observation about people treating AI like Google resonates with me deeply.

It seems like the real challenge isn’t just teaching prompt engineering but reframing how people think about AI entirely. What if AI education focused less on technical skills and more on developing an experimental mindset—treating AI as a partner to learn from through trial and error?

That could bridge the gap between what these models can do and how they’re actually used

-  Use google when you need one fact and need peace of mind 
- Use AI search when you want a fact with an explainer or if it is multiple questions or more complex question 



---

## Which AI to use 

For most people you should pick one of three systems: [Claude](https://substack.com/redirect/331e87f2-b55b-4004-9d1c-1a4c98a13209?j=eyJ1IjoiNGZjbTdpIn0.0wE5QWo7QblfYvrTdeRsn3IjDPkv2ewLH_iW6EDHDis "https://substack.com/redirect/331e87f2-b55b-4004-9d1c-1a4c98a13209?j=eyJ1IjoiNGZjbTdpIn0.0wE5QWo7QblfYvrTdeRsn3IjDPkv2ewLH_iW6EDHDis") from Anthropic, Google’s [Gemini](https://substack.com/redirect/0e14dd75-b46c-4a11-ab99-cbf212641eef?j=eyJ1IjoiNGZjbTdpIn0.0wE5QWo7QblfYvrTdeRsn3IjDPkv2ewLH_iW6EDHDis), and OpenAI’s [ChatGPT](https://substack.com/redirect/384c3f4c-e13b-4288-a76e-0a4628ee8c1a?j=eyJ1IjoiNGZjbTdpIn0.0wE5QWo7QblfYvrTdeRsn3IjDPkv2ewLH_iW6EDHDis). With all of the options, you get access to both advanced and fast models, a voice mode, the ability to see images and documents, the ability to execute code, good mobile apps, the ability to create images and video (Claude lacks here, however), and the ability to do Deep Research. Some of these features are free, but you are generally going to need to pay $20/month to get access to the full set of features you need. I will try to give you some reasons to pick one model or another as we go along, but you can’t go wrong with any of them.

What about everyone else? I am not going to cover specialized AI tools (some people love Perplexity for search, Manus is a great agent, etc.) but there are a few other options for general purpose AI systems: [Grok](https://substack.com/redirect/e675f8f8-aa3e-40f0-bb55-1ac499fe8d97?j=eyJ1IjoiNGZjbTdpIn0.0wE5QWo7QblfYvrTdeRsn3IjDPkv2ewLH_iW6EDHDis) by Elon Musk’s xAI is good if you are a big X user, though the company has not been very transparent about how its AI operates. Microsoft’s [Copilot](https://substack.com/redirect/7a32ac78-d667-432c-bb69-a7572dadc9b9?j=eyJ1IjoiNGZjbTdpIn0.0wE5QWo7QblfYvrTdeRsn3IjDPkv2ewLH_iW6EDHDis) offers many of the features of ChatGPT and is accessible to users through Windows, but it can be hard to control what models you are using and when. [DeepSeek](https://substack.com/redirect/7a394c9f-effa-4040-9546-f3d7afef0005?j=eyJ1IjoiNGZjbTdpIn0.0wE5QWo7QblfYvrTdeRsn3IjDPkv2ewLH_iW6EDHDis) r1, a Chinese model, is very capable and free to use, but is missing a few features from the other companies and it is not clear that they will keep up in the long term. So, for most people, just stick with Gemini, Claude, or ChatGPT



### Picking a Platform 
(help: )

### Picking A Model 
(help: rewrite)
Use the right model for the task. 
Each of these platforms offers multiple models to choose from. It's like deciding between hiring a quick intern, an experienced consultant, or a world-class expert—they all solve problems, but you'd assign them completely different projects. These platforms typically offer three levels: a speedy model for everyday tasks, a robust model for complex projects, and occasionally a premium model for the most challenging work, which may take 20 plus  minutes reasoning through problems and cost you a monthly subscription. My advice is to start with the free fast models and then experiment from there. I have more details in my toolkit.

### Specialized Tools 

(help: draft "there are many different tools for a lot of different specific purposes. Specialized tools have deep knowledge of specific domains. They come pre-tuned with templates and industry-specific knowledge. The list constantly grows and is too long to list here, but below are a few popular ones. Maybe of these tools are built on top of the frontier models such as ChatGPT, Claude, and Gemini. Then give a description of each below and a link to their website. )

 (help: for each of the below write one sentence summary of tool and include the PNG of the logo and URL)

- Perplexity
- Gamma 
- Grammarly 
- Midjourney 
- Flex
- Jasper 
- Fireflies 
-


---


## Types of Prompting 

https://www.oneusefulthing.org/p/working-with-ai-two-paths-to-prompting


### Structured 

**Big Prompts:** These are ideal for tasks that require structured, context-rich responses. For example, if you’re asking AI to draft a business proposal, a comprehensive prompt that outlines your objectives, target audience, and key points will produce the best results. Big prompts provide the AI with a clear framework, reducing ambiguity and improving the quality of the output.

**Detailed Upfront**: Craft comprehensive prompts with role, task, context, format

researching and working hard to get a one shot response 

### Conversational 

Back and forth with the AI to get to what you want 
**Casual Chats:** Shorter, iterative exchanges are better suited for exploratory tasks like brainstorming or generating ideas. This approach allows you to refine the AI’s output step by step, adapting your input based on its responses. For instance, when brainstorming marketing slogans, you might start with a broad idea and gradually narrow your focus through a series of back-and-forth interactions.
**Conversation Style**: Start simple, refine through back-and-forth dialogue

Never accept the first answer (refine responses with follow-up prompts).


Follow up prompting (use it as a conversation to make changes like adding specificity, translating into a different format)


### Controlling the Conversation
(help: talk about how the context of the conversation is important and how it impacts the AI's response.)

Knowing when to use a follow up vs rerunning the prompt vs starting a new chat 

- Building on the conversation  (help: Expand on this)
- Forking the conversation with "Edit Prompt" (help: Expand on this)
	- - **Edit Button**: Click "edit" to try different approaches without losing conversation
- Starting a new conversation (help: Expand on this)
	- - **Start Fresh**: New chat = clean slate when context gets muddled

---

## Prompting Frameworks 

(help: reference Types of Prompting - Structured. Talk about when a framework is a good idea. Mention that there are multiple frameworks to consider. Quickly say that these frameworks will evolve as the models evolve (for instance, assigning a role might not be as valuable as it was last year)

### RTCF 
- role 
- task 
- context 
- format 

(help: add more common prompting frameworks here)


**Frameworks** 

Starter prompt:
- You are expert (blank)
- Context
- Input 
- Output
- Plan steps before executing, accuracy & completeness are vital.
- Ask questions for clarity


Key Prompt Structure 
- Context: who you are and what you want 
- Instructions:  where you say your job is xyz  
- Output format:  
- Rules: dont do this, do this  
- Example:  




---

## Input Types and Tools 


### Uploading Documents 
(help: Quick explanation of feature (uploading documents) and why you might want to do it. Examples of file types or types of documents you can upload and some quick use cases. What are some prompts to go with the uploaded document OR what do you do with it?) 

- analyze data 
- interrogate papers and data files
- summarize documents 
- Upload a CSV or spreadsheet and ask questions about it. 

### Uploading Images 
(help: Quick explanation of feature (uploading images) and why you might want to do it. what are some use cases for uploading images)

- what can I make with these ingredients 
- what is this 

Use images as context 
- upload a screenshot of a spreadsheet and ask for a needed formula for a cell 
- ask to identify content (or describe content... useful if you want to create an image like it and want help creating the prompt)
- have it count objects 
- have it critique a design (website screenshot, poster render, marketing copy)

Use Images for Ambiguous or Visual-Heavy Tasks: If your question relies on visual context (e.g., layout, handwriting, diagrams), uploading an image will yield better results than text.


### Voice Entry 
(help: Quick explanation of feature (voice entry) and why you might want to do it. consider content from the link below)
https://www.oneusefulthing.org/p/on-speaking-to-ai

### Advanced Voice Mode 
(help: Call out Advanced Voice Mode from ChatGPT and how its different from Voice Entry (and amazing). Note the companies that have this feature (ie ChatGPT does have it, Claude does not). Also its only available in certain models like 4o not o3-pro) 

How I use it:  
- Drop a link to an article or upload a document, then use Advanced Voice Mode during a run and talk about it. 
- Use it on the way to work to learn something or brainstorm an idea. 
- When I'm about to wrap up, I ask for a detailed and structured report of our entire conversation. 
- The transcript and report I can access when I get back to my desk. 

### Video Mode 

(antedote about making white fish ceviche)


### Custom Instructions
(help: Quick explanation of feature (custom instructions), how to access it, and why you might want to use it.) 



### Projects 
(help: Quick explanation of this feature, how to access it, and why you might want to use it. Use the bullets below as inspiration.) 
Claude Projects - Pro plan required 
Think of them like folders. Give project a name and what you want to achive. 
Store files for context, organize past requests, custom instructions for this project 


### Deep Research 
(help: Quick explanation of this feature, how to access it, and why you might want to use it. Use the bullets below as inspiration.) 

1. The goal of the report (what are you _actually_ trying to do with this report?).
2. The expected output of the report (what should it look like when done?).
3. The sources to search (where should it look for this information, if it matters?).

 Start by telling it you want expert-level analysis with multiple high-quality sources, define your exact research question, ask for synthesis across sources, and always demand proper citations.



### Canvas 
(help: Quick explanation of this feature, how to access it, and why you might want to use it. Use the bullets below as inspiration.) 
- Toggle on if you know youre going to edit and build upon ChatGPTs response more than once 
- Ask for inline edits or suggestions 
- Manually make changes 
- Suggest edits feature 
- previous versions feature 
- other built-in shortcuts 
- download if various file formats (pdf, doc, md)






---

## General Prompting Tips 


I want you to find 50 to 100 examples of quality tips, guidance, or best practices for me to share in my presentation for people to use AI. Search youtube for people giving prompting or AI advice, check OpenAI and Anthropic (or others) websites for prompting guidance, find guidance from notable AI experts and influencers. I want a great list that can apply to beginners and also people who are familiar with using LLMs. Take as long as you need and as many sources and tools required to complete this task. Use a free youtube transcription site for youtube videos you dont have access to. 

I would like each in the following format: 
**Title of the Tip** (this will be the header of a slide in the presentation)
Overview: (one sentence overview of the tip. This will be text on the slide). 
Example: (Example of tip being used. Show the prompt, or prompts, or an example that I can show on the slide for the viewers. Include a comparison to not using the tip if helpful to communicate the tip. For example showing a weak broad prompt vs a prompt framework with role, context, examples, etc )
Speaker notes: (The exact words that I would read to the audience to explain this tip to them. If should reference the example (and comparison if there is one) as it will be on screen as I read this. Do not mention the source of the tip in the speaker notes.I will likely spend between 30 seconds up to 90 seconds per tip - depending on the complexity of the tip)
Sources: (site the source or sources the tip was found or inspired from. I will show the URL on screen in the corner)



### Output  

Define the output explicitly 

Use frameworks instead of vague requests (give AI fill-in-the-blank template outlines—_we do this to help us write!_).


### **Context** 

Above all, the most important thing you can do is give your LLM relevant content to work with.
 
 If you are trying to create great brand marketing for instance, give it a description of your ideal customer, give it the prices of your products, give it brand colors, and give it your brand's mission statement.

The more information your model has, the better the outputs will be.

#### Using Examples 

Zero, One, Few Shot Prompts
- one shot gets you 12% better response 
- few shot gets you another 7% 
- 

**Provide Examples** 
This gives the AI a template to work from. 



#### Ask me questions to get context

“_ask me any clarifying questions before you begin_”  to the end of your prompts. Instead of guessing what information your AI needs, let it interview you.

*"ask me one question at a time until you have enough information to generate a great answer"*

what are ten questions I should ask about this? or what do you need to know from me to give the best response?

"Before answering my questions directly, please ask me 1-3 targeted questions that will help you understand my context, goals, and constraints better." 

**Let AI Ask Questions**: "What do you need to know to give me the best response?"


Spartan tone of voice 
- A good middle ground of being direct and being pragmatic and offering the model flexibility 




### Ask AI to Help Write the Prompt

Better prompts get better answers. 

Have AI help you make the prompt. - I do this for deep research prompts. You can do it for anything though. Especially if you are going to do the same thing over and over. A better prompt will help. 
- You can do it before hand: what would make this prompt better (prompt)? 
- You can do it after the output: Tell me what other information I should include to get a better output 

What do you need to know from me to give the best response? 

Rate my prompt 
1. Rate this prompt on a scale from 1 to 10. (your prompt here)
2. What would make this a 10/10 prompt? 


_“Here’s what I asked ChatGPT: [insert prompt]. Here’s the response I got: [paste it]. How can I improve the prompt to get better results?”_

Before proceeding with this task, please ask me any questions you need to provide the most helpful response possible. Consider aspects like context, specific requirements, format preferences, and any constraints I should be aware of.



### Prompting Language 

**Be really clear about what you want** 
Use unambiguous language
- Bad prompt: "Produce a report based on this data"
	- "produce" and "report" are ambiguous words 
- Good prompt: "List our 5 most popular products and write me a one paragraph description"


**Cut the fluff**
- Avoid pleasantries or conversational filler (e.g., "can you please...").
- Be direct: “Write a story about a robot and dog” instead of “Can you please...”.
- Be Clear, Not Polite: Politeness wastes tokens. Direct prompts perform better.


**Prompt Length** 
- Performance decreases with prompt length
	- Dont remove context and examples 
	- Increase the information density 


Remove conflicting instructions 
- example: "detailed summary"

 Positive format rules: Tell Claude _how_ to format (e.g., “use smooth paragraphs”), not what to avoid (e.g., “no markdown”).

Set clear boundaries using   
"focus on", "avoid", "only"

Favorite Commands 
- use the word "elaborate" to add more detail 
	- "Elaborate on these 3 bullet points"
- Use the word "critique" to spot problems early 
	- Im arguing for more headcount based on this data, critique my approach before my presentation 
- use the word "rewrite" to improve the previous content 
	- rewrite this paragraph using a friendly tone of voice 




**Split up complex requests**
Split up complex requests into smaller ones. The LLM will use its output limit on your task, so if you focus it will go more in depth and spend more time on it (instead of sharing it with other tasks). 

**Split huge prompts into smaller chunks** 
Not only does this make things more manageable, but dramatically reduces errors and hallucinations. Complex tasks have a higher chance of going off the rails, so breaking them down keeps everything on track. 
Overloaded prompt: "Explain the causes, effects, and potential solutions for climate change"
Thats alot for one go. It might give a decent answer, but miss key points or blend everything together. 
Instead break it down like this:
"List the top 3 cases of climate change." 
"Describe the main effects of climate change on agriculture"
"Suggest two practical solutions to combat climate change"
Now you have three clear focused tasks 



**Use Delimiters (or markdown) to separate information** 
- '## Task ## 
- '## Document ##'


**Use XML** 
(see https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags#example-legal-contract-analysis)
- This helps the LLM understand sections 
- <'example> asdlkf aslkjfds </'example>  (without the ')


### Ask for Multiple Versions 


 **Ask for Multiple Versions**: "Give me 3 different approaches to this"





### Assigning a Role 

**Role Assignment / Set a Role** 
Role assigning allows you to tap into the LLM's ability to act as a specialist, providing focused, expert-level responses which help to reduce rambling and generic output.

"I want you to act as a Financial Analyst."

Roleplay Tightens Focus: Telling the AI “you are a [role]” restricts scope and improves relevance.
- _“As a potential client, what questions would you ask after reading this?”_
- _“From a C-suite view, what weaknesses do you see in my business case?”_
- _“Pretend you’re a tech CEO—what concerns would you have about this report?”_


### Tone 

**Match Your Tone** 
Feed it your old writing. Take an old english essay, some chats you sent to friends, or any other substantial piece of writing and supply it to the model. This works with any writing.






**Iterative Prompting** 
Lets say we start with a broad prompt.. say: 
Prompt 1 "explain renewable energy"
The response will proibably be vague and all over the place. So we refine it. 
Prompt 2 "focus on the advantages of wind energy compared to fossil fuels "
Its closer but still not exactly what you are looking for. So we continue to refine. 
Prompt 3 "Rewrite the explanation for a 10 year old audience, using simple language and examples"
And now the results hit the mark. 
Could you have just put that all into one prompt, yes.. but sometimes you dont know what you need up front 





Be Clear About Your Goal: Specify what you want (e.g., “Summarize this chart,” “Find errors in this code,” “Translate this handwritten note”) helps produce more targeted responses.







### Output Formatting

Spec Sheet Squeeze
- Instead of asking for “a marketing plan,” ask for “a marketing plan with these exact specifications” followed by a bulleted list of your requirements.
- “Create [deliverable] that includes: • [specific element 1] • [specific element 2] • [formatting requirements]”


Be specific about your output 


Give me a 200 word summary about [topic] avoiding technical jargon and focusing on [detail]


Lists, tables, essays, poems... anything. 
"write a timeline of major events in computer history, formatted as a bulleted list. Include 5-7 key milestones, with one sentence explaining each. "
Compared to: "Tell me history of computers"



**Output Framework**
Stop Asking AI to “Write X” and Give It an Output Framework
AI is great at filling in blanks. It’s bad at figuring out what you actually want. So, make it easy for the poor thing.

🚫 Bad prompt: “Write an essay about automation.”

Title: [Insert Here]  
Thesis: [Main Argument]  
Arguments:  
- [Key Point #1]  
- [Key Point #2]  
- [Key Point #3]  
Counterarguments:  
- [Opposing View #1]  
- [Opposing View #2]  
Conclusion: [Wrap-up Thought]


__Interactive/Conversational Formats:__

- "Present as a conversation between me and an expert, with follow-up questions"
- "Structure as a Q\&A session covering my main concerns"
- "Write as if you're coaching me through each decision point"

__Narrative/Storytelling Formats:__

- "Tell a story of someone in a similar situation and how they succeeded"
- "Write as a day-in-the-life scenario showing the solution in action"
- "Present as a case study with before/after scenarios"

__Visual/Spatial Formats:__

- "Describe as if you're walking me through the space/process"
- "Structure like a recipe card with clear sections and timing"
- "Present as a flow chart in words, showing decision points"
- "Format as a visual guide I could sketch or diagram"

__Time-Based Formats:__

- "Structure as a countdown timeline (30 days before, 1 week before, day of)"
- "Present as morning/afternoon/evening routines"
- "Organize as a timeline"

__Comparison/Evaluation Formats:__

- "Present 3-5 scenarios with pros/cons for each"
- "Structure as 'If this, then that' conditional recommendations"
- "Format as a decision tree with clear choice points"

__Template/Worksheet Formats:__

- "Create fill-in-the-blank templates I can customize"
- "Structure as a workbook with space for my notes"
- "Present as checklists with priority rankings"




**Output Style and Tone** 

"Keep the message the same, but act as a pirate"

"write facebook ad copy for window shades, in the style of Shakespeare "



**Review or Analyze** 

Writing Critic 
Here's the workflow: First, ask the AI to list the top 5 weaknesses in your draft. Then, have it rewrite the piece addressing every single flaw. It's like having a snarky editor who moonlights as a ghostwriter—minus the coffee breath and passive-aggressive sticky notes.



**Different Versions or Viewpoints** 

Explain [complex concept] three times:
(a) to a 5-year-old
(b) to a college student
_(c) to a domain expert who wants edge-case caveats_

 “Argue the opposite position entirely.”
 
_“Here’s what I believe: [insert opinion]. What’s the strongest argument against it (slash help me “steel man” the other side)? How would a smart, skeptical person respond?”_

"Present 3 perspectives on [_your situation/decision,_ _presented in a neutral way_]:
1) Someone who strongly supports the position.
2) Someone who completely disagrees.
3) A neutral expert who weighs both sides.
Be specific with reasoning for each.


**Ask for multiple options:** 
_"Give me 15+ alternative titles for my novel,"_ or _"List two completely different approaches I could take to solve this problem."_

Ask it to mimic your own tone of voice by providing 3-5 writing samples to capture your “voice”—suddenly your AI content sounds like you, not a robot.


**Parameters: Temperature** 
Dials that you can tweak to adjust how the AI responds. Crank it up and you will get super createive. Turn it down you will get a grade A student that sticks to the rules. 
"ChatGPT, Claude, and Gemini: temperature 0.7" (scale from 0 to 1)

**Parameters: Other**
Max Tokens: Controls how long the AI will ramble on 
Top-p: for creative diversity 
Top-k: pick the best words, but not too many options 



Think hard and use web search to comprehensively research **[YOUR TOPIC HERE]**. I want you to conduct 10 sequential searches on this topic. Search different angles, sources, and perspectives until you hit your search limit. Give me a thorough analysis with citations. At the end, double check your work to make sure you completed all 10 searches. If less than 10 searches individual searches were conducted, conduct the remainder.



_"Turn this idea into a short story or real-life-style anecdote that makes the point more relatable. [Type your idea/concept.]"_



### Other Tips 

**Save your Prompts** 
Save your successful prompts in a document for you to use later. 


When I share ideas or drafts, don't just improve them - help me understand why certain approaches work better and coach me to become a better thinker.


Force AI to pick a side (it's too neutral otherwise).



|                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| If a problem has you stumped, have the AI probe for overlooked factors. **Ask “What might I be missing?”**                                                                                                                                                   |
| **Example:** _"Our project keeps getting delayed despite our best efforts. What might we be missing?"_                                                                                                                                                       |
| Or better yet, have it brainstorm “_at least 15 things I might be missing, ranked from most obvious to most unexpected, in a bullet point list. If there are less than 15 potential missing factors, include as many elements approaching 15 as there are.”_ |
|                                                                                                                                                                                                                                                              |

**Not What Questions You Ask, but How You Ask Them** 
The second most important piece to great results is not what questions you ask, but rather _how_ you are asking them. To demonstrate how phrasing impacts model quality, here are some direct comparisons showing poor versus well-structured prompts:

| Bad Question                                      | Good Question                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Get me top performing stocks and run an analysis. | I want you to act as a Financial Analyst. Go to Yahoo Finance and find the top 10 stocks by market cap. Once you have curated a list, I want you to go to marketwatch.com and find relevant news on each of them. Provide me a list, in order of market cap, with the stock name, it's price, and the overall market sentiment. |
| How do I cook chicken?                            | I am preparing for dinner and looking to cook chicken. I am planning to grill it on the barbeque, along with some vegetables. The chicken is marinated and ready to go, what steps should I take to cook it?                                                                                                                    |
| Write me a blog post on prompt engineering.       | I am writing a blog about how to use LLMs effectively with prompt engineering. I want it to be beginner-friendly, conversational, and include real-life examples. Start with a short intro, then explain what LLMs are and why prompting matters.                                                                               |



### Curbing AI Sounding Language

If you're making an argument, provide supporting facts in favor of the argument rather than negating an argument no one is making.

“_Avoid any sentence structures that set up and then negate or expand beyond expectations (like 'X isn't just about Y' or 'X is more than just Y'). Instead, use direct, affirmative statements. Feel free to be creative with your sentence structures and expression styles._”


“Ensure heterogeneous paragraphs. Ensure heterogeneous sentence lengths.”

“Be conversational, empathetic, and occasionally humorous. Use idioms, metaphors, anecdotes, and natural dialogue.”

More Examples 
https://neuron-prompt-library.lovable.app/prompt/f21aae2d-bd21-4af7-9f92-6669846de774?utm_source=www.theneurondaily.com&utm_medium=newsletter&utm_campaign=who-is-llama-4-for



---
## Use Cases 

**Talk with**
Interrogate, summarize, interact with pdfs, websites, articles, 


**Planning**



**Learning** 

_Hey, you are an AI expert. I would love your help and a consultation with you to help me figure out where I can best leverage AI in my life. As an AI expert, would you please as me questions. one question at a time until you have enough context about my workflows, responsibilities, KPIs and objectives that you could make two obvious recommendations for how AI could leverage AI in my work._






---


## Image Generation Tips 




**Image Gen Framework** 
1.Subject 2. Description 3.Style/Aesthetic 
"The batmobile stuck in Los Angeles traffic, impressionist painting, wide shot"


### Combine Images

Combine multiple images into one image with ChatGPT’s image generator
![[00_Core/System/Attachments/Content Collection/339390afdd1ebe11d80c97e8432f2b85_MD5.png]]

### Sketch to Render 

Sketch to realistic image 
![[00_Core/System/Attachments/Content Collection/a1fce1ef38f037cb53a44949bb9d4292_MD5.png]]

visualising DIY projects with crude drawings as prompts
![[00_Core/System/Attachments/Content Collection/4b3ca078303ad84d6f2bf835c308fb78_MD5.png]]







---




## Best Practices Overview  

Here’s a focused list of **AI best practices for beginners**, especially relevant when using tools like ChatGPT, Claude, or Gemini for personal or professional tasks:

### 🧠 Understanding the Tool

1. **Don’t treat it like Google.**  
    Instead of keywords, give clear instructions. Think: “Write a polite follow-up email to a client who missed a meeting,” not “client email follow-up.”
    
2. **AI is a starting point, not a final product.**  
    Review, revise, and verify anything it creates — especially if facts or tone matter.
    
3. **Know its limitations.**  
    It doesn’t “know” facts — it predicts words. It can sound confident while being wrong.
    

---

### 🗣 Prompting Basics

4. **Be specific.**  
    Clear, structured inputs yield better outputs. E.g., “Write a 3-paragraph summary in a friendly tone for parents of 3rd graders.”
    
5. **Add context.**  
    Tell the AI who you are, what you need, and who it’s for.  
    Example: “You are a career coach. Help me revise my resume for a product design role at a tech company.”
    
6. **Use the R-T-C-F framework.**
    
    - **R**ole: Who the AI is pretending to be
        
    - **T**ask: What you want
        
    - **C**ontext: Background info
        
    - **F**ormat: What the output should look like
        

---

### 🔁 Iteration

7. **Iterate through conversation.**  
    You don’t need perfect prompts. Ask follow-up questions, refine your input, and go step-by-step.
    
8. **Use AI like a collaborator.**  
    Treat it like a junior teammate. You give the direction and decide what’s usable.
    

---

### 🧰 Tool Usage

9. **Try multiple tools.**  
    Compare ChatGPT, Claude, or Gemini on the same task. Each has strengths.
    
10. **Use tool features.**  
    Take advantage of uploads, memory, Canvas/Docs modes, code interpreters, etc., depending on the platform.
    
11. **Start with low-stakes tasks.**  
    Practice on things like rewriting emails, summarizing articles, or organizing lists before applying it to sensitive work.
    

---

### ⚠️ Caution & Judgment

12. **Fact-check important claims.**  
    Especially in legal, financial, health, or technical contexts.
    
13. **Avoid pasting in sensitive or private data.**  
    Unless you're using enterprise tools with guarantees around data privacy.
    
14. **Check tone and appropriateness.**  
    The model may not always align tone with your audience (e.g., too casual or robotic).
    

---






### 5. **"Emergency AI Kit"** (Bonus slide)

- Stuck on a project: "Help me think through this problem from 5 different angles"
- Need inspiration: "Give me 20 creative approaches to [challenge]"
- Writer's block: "Here's what I'm trying to say: [messy thoughts]. Help me say it clearly"
- Decision paralysis: "Help me create a decision matrix for these options"


