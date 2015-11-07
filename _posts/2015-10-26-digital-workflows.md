---
layout: post
title: Selecting a Digital Workflow
tags: digital, research
---
*Disclaimer: workflows are rather infinitely customizable to fit project goals, intellectual patterns, and individual quirks. I am writing mine up because it has been useful for me to see how others are solving such problems. I invite you to take what is useful, discard what is not, and share what you have found.*

Writing a dissertation is, among many things, a exercise in data management. Primary materials and their accompanying notes must be organized. Secondary materials and their notes must be organized. Ones own writing must be organized. And, when doing computational analysis, the code, processes, and results must be organized. This, I can attest, can be a daunting mountain of things to organize (and I like to organize).

There are many available solutions for wrangling this data, some of which cost money, some of which are free, and all of which cater to different workflows. For myself, I have found that my reliance on computational methods and my goal of HTML as the final output make many of the solutions my colleagues use with great success (such as Scrivener and Evernote) just not work well for me. In addition, my own restlessness with interfaces has made interoperability a high priority - I need to be able to use many tools on the same document without having to worry about exporting to different formats in-between. This has lead to my first constraint: my work needs to be done in a plain text format that, eventually, will easily convert to HTML.

The second problem is version control. On a number of projects in the past, written in Word or Pages, I have created many different named versions along the way. When getting feedback, new versions were created and results had to be reincorporated back into the authoritative version. This is all, well, very inefficient. And, while many of these sins can be overcome when writing text for humans, the universe is less forgiving when working with code. And so, constraint number two: my work needs to be under version control and duplication should be limited.

The third problem is one of reproducibility and computational methods. The experiments that I run on my data need to be clearly documented and reproducible. While this is generally good practice, it is especially important for computational research. Reproducible and clearly documented work is important for the consistency of my own work over time, and to enable my scholarship to be interrogated and used by others. And so, the third constraint: my work needs to be done in such a way that my methods are transparent, consistent, and reproducible.

My solution to the first constraint is Markdown. All of my writing is being done in markdown — including this blogpost! Markdown enables me to designate the information hierarchies and easily convert to HTML, but also to work on files in multiple interfaces. Currently, I am writing in [Ulysses](http://www.ulyssesapp.com/), but I also have used [Notebooks](http://www.notebooksapp.com/), [IA Writer](https://ia.net/writer/mac/), and Sublime text editor. What I love about Ulysses is that I can have one writing interface, but draw from multiple folders, most of which are tied to git repositories and/or dropbox. Ulysses has a handy file browser window, so it is easy to move between files and see them all as part of the larger project. But regardless of the application being used, it is the same file that I am working with across multiple platforms, applications, and devices. 

My solution to the second constraint is Github and the [Github Student Developer Pack](https://education.github.com/pack). Git and Github enable version control, and multiple branches, and all sorts of powerful ways to keep my computational work organized. In addition, Github’s student pack comes with 5 private repos (private while you are a student), along with a number of other cool perks. While I am a fan of working in the open and plan to open up my work over time, I have also come to value being able to make mistakes in the quiet of my own digital world.  Dissertations are hard, and intimidating, and there is something nice about not having to get it right from the very beginning while still being able to share with advisors and select colleagues. 

But, Github hasn’t proved the best for the writing side of things. The default wiki is limited in its functionality, especially in terms of enabling commenting, and repos are not really made for reading. My current version control solution for the writing side of the project is [Penflip](https://www.penflip.com/), billed as  “Github for Writing”. Writing with Penflip can be done through the web interface, or by cloning down the files (which are in markdown) and working locally. As such, the platform conforms to the markdown and the “one version” requirements. The platform is free if your writing is public, and $10/month for private repos, which is what I am trying out. I am using PenFlip a bit like a wiki, with general pages for notes on different primary documents and overarching pages that describe lines of inquiry and link the associated note and code files together.[^2] This is the central core of my workflow - the place that ties together notes, code, and analysis and lays the ground work for the final product. So far it is working well for the writing, though using it for distribution commenting has been a little bumpy as the interface needs a little more refining.

And the code. The code was actually the first of these problems I solved. Of the programming languages to learn, I have found Python to be the most comfortable to work in. It has great libraries for text analysis, and comes with the benefit of [Jupyter Notebooks](http://jupyter.org/) (previously IPython Notebooks). Working in IPython Notebooks allows me to integrate descriptive text in markdown with code and the resulting visualizations. The resulting document is plain text, can be versioned, and displays in HTML for sharing. The platform conforms to my first two requirements — markdown and version controlled — while also making my methods transparent and reproducible. I run the Jupyter server locally, and am sharing pieces that have been successfully executed via nbviewer - for example, I recently released the code I used to create my pilot sample of one of my primary corpuses at [http://nbviewer.ipython.org/gist/jerielizabeth/62816081c79ae0495755](http://nbviewer.ipython.org/gist/jerielizabeth/62816081c79ae0495755). I am also abstracting code that is run more than once into a local library of functions. Having these functions enables me to reliably follow the same processes over time, thus creating results that are reproducible and comparable.

And that is my current tooling for organizing and writing both my digital experiments and my surrounding explanations and narrative. 

---

[^2]:	I somehow missed the “research wiki” bus a while back, but thanks to a recent comment made by Abby Mullen, I am a happy convert to the whole concept.