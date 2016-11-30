---
layout: post
title: Setting up a Ruby Environment for Website Development
tags: digital, tutorials, teaching
published: false

---
From frameworks such as [SASS](http://sass-lang.com/) and [Compass](http://compass-style.org/), which streamline the process of writing CSS, to [Susy](http://susy.oddbird.net/) for creating responsive layouts and HTML generation engines such as [Jekyll](http://jekyllrb.com/) and [Middleman](http://middlemanapp.com/), there are many tools for creating webpages quickly and effeciently. However, such tools can prove intimidating as there is no graphical interface - the tools are installed and used via the terminal.

This tutorial covers how to set up a Ruby development environment on a Mac in order to confidently use Ruby based frameworks for website development.

Parts:
1. What is Ruby and what are Gems?
2. System Ruby and multiple Ruby versions
3. Rbenv and Homebrew
4. Using Brew to install Gems
5. Setting up a project

1. What is Ruby? And what are Gems?

Ruby is a programming language, ... On your mac, there are a number of programming languages installed and that you can use. For example, open the Terminal application and type "ruby -v" and "python --version". In each case you will get a version number printed on the screen. This is the version of these languages that are preinstalled on your Mac operating system. They are located with your system files (System/Library/Frameworks) and are there in the background.

[img]

Ruby and Python are considered "high level programming languages," because the code one writes is abstracted from the way the computer understands and processes the code. This enables the programmer to write code that includes "natural language elements", such as telling the script to "print" or "write" the results. This makes the code easier to write and to read. It also means that a lot of the computational work is managed by the language. A bit of "magic" perhaps, but magic that can be understood as one digs deeper into programming.

Now, like "natural language," programming languages change and evolve over time. This is why the version number matters - it tells us the rules by which we can build. This becomes even more important when we start installing gems. Gems are small packages, little bundled bits of code, that can be used when building scripts or programs. Think of these as extensions of the language for addressing particular problems. Multiple gems can be used on a project, fit together like puzzle pieces to solve a variety of problems.

So why do we need a whole development environment when Ruby comes installed?

2. System Ruby and Multiple Ruby Versions

The downside of being able to combine multiple gems in diferent projects is that different gems expect particular versions of ruby or of one another. If you install gems directly to the root directory with the default system version of ruby, you will inevitably get youself into a spot where you have a conflict among the gems you're using on a particular project or between the version of ruby and the gems you are using. This is no fun to trouble shoot (been there) and often you end up having to wipe everything and start over (done that).

And so, rather than using the system version of Ruby and installing gems at root (don't listen to online tutorials that tell you to "sudo gem install"), there are a number of tools for managing your version of ruby and gems on particular projects.

3. Rbenv

4. Brew

5. Setting up a project




For development on a Mac

- Rbenv and Brew
- Installing Ruby
- Using Brew to install Gems for Projects
- Gem compatibility
