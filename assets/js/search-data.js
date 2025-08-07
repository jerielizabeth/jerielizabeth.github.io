// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-the-one-about-tools",
        
          title: "The One About Tools",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2022/05/10/the-one-about-tools/";
          
        },
      },{id: "post-the-tie-that-binds-for-histoinformatics2021",
        
          title: "The Tie that Binds for HistoInformatics2021",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/10/20/HistoInformatics/";
          
        },
      },{id: "post-omeka-for-the-student-scholar",
        
          title: "Omeka for the Student Scholar",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/02/09/omeka-for-the-student-scholar/";
          
        },
      },{id: "post-reviving-the-blog",
        
          title: "Reviving the Blog",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2020/12/07/reviving-the-blog/";
          
        },
      },{id: "post-using-pyldavis-with-mallet",
        
          title: "Using pyLDAvis with Mallet",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2018/07/17/pyLDAviz-and-Mallet/";
          
        },
      },{id: "post-ways-to-compute-topics-over-time-part-4",
        
          title: "Ways to Compute Topics over Time, Part 4",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/07/09/calculating-and-visualizing-topic-significance-over-time-part-4/";
          
        },
      },{id: "post-ways-to-compute-topics-over-time-part-3",
        
          title: "Ways to Compute Topics over Time, Part 3",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/06/30/calculating-and-visualizing-topic-significance-over-time-part-3/";
          
        },
      },{id: "post-ways-to-compute-topics-over-time-part-2",
        
          title: "Ways to Compute Topics over Time, Part 2",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/06/23/calculating-and-visualizing-topic-significance-over-time-part-2/";
          
        },
      },{id: "post-ways-to-compute-topics-over-time-part-1",
        
          title: "Ways to Compute Topics over Time, Part 1",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/06/21/Calculating-and-Visualizing-Topic-Significance-over-Time-Part-1/";
          
        },
      },{id: "post-know-your-sources-part-2",
        
          title: "Know Your Sources (Part 2)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/06/04/know-your-sources-2/";
          
        },
      },{id: "post-know-your-sources-part-1",
        
          title: "Know Your Sources (Part 1)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/05/05/know-your-sources-1/";
          
        },
      },{id: "post-extracting-text-from-pdfs",
        
          title: "Extracting Text from PDFs",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/04/27/Extract-Text-from-PDFs/";
          
        },
      },{id: "post-downloading-corpus-files",
        
          title: "Downloading Corpus Files",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/04/25/Gathering-Sources/";
          
        },
      },{id: "post-updating-the-dissertation-description",
        
          title: "Updating the Dissertation Description",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/04/21/updated-dissertation-description/";
          
        },
      },{id: "post-i-can-haz-charts",
        
          title: "I can haz charts!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2017/01/09/early_error_summary/";
          
        },
      },{id: "post-religion-and-data-a-presentation-for-the-american-academy-of-religion-2016",
        
          title: "Religion and Data: A Presentation for the American Academy of Religion 2016",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2016/12/01/religion-and-data/";
          
        },
      },{id: "post-selecting-a-digital-workflow",
        
          title: "Selecting a Digital Workflow",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2015/10/26/digital-workflows/";
          
        },
      },{id: "post-bridging-the-gap",
        
          title: "Bridging the Gap",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/07/11/bridging-the-gap/";
          
        },
      },{id: "post-summer-of-research-part-i",
        
          title: "Summer of Research, Part I",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/07/08/Summer-of-Research-Part-1/";
          
        },
      },{id: "post-all-models-are-wrong",
        
          title: "All Models are Wrong",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/06/12/lessons-from-dhsi/";
          
        },
      },{id: "post-moving-to-middleman",
        
          title: "Moving to Middleman",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2014/03/12/Moving-to-Middleman/";
          
        },
      },{id: "post-bringing-rails-girls-to-the-digital-humanities",
        
          title: "Bringing Rails Girls to the Digital Humanities",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2013/07/30/bringing-rails-girls-to-the-digital-humanities/";
          
        },
      },{id: "post-intro-to-rails-girls-for-hastac-2013",
        
          title: "Intro to Rails Girls for HASTAC 2013",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2013/03/15/intro-to-rails-girls-for-hastac-2013-draft/";
          
        },
      },{id: "post-review-of-herb-social-history-for-every-classroom",
        
          title: "Review of HERB: Social History for Every Classroom",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2013/03/05/review-of-herb-social-history-for-every-classroom/";
          
        },
      },{id: "post-social-gospel-and-missions",
        
          title: "Social Gospel and Missions",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/12/06/social-gospel-and-missions/";
          
        },
      },{id: "post-short-tutorial-cleaning-up-downloaded-files",
        
          title: "Short Tutorial: Cleaning up downloaded files",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/11/28/short-tutorial-cleaning-up-downloaded-files-draft-2/";
          
        },
      },{id: "post-looking-outside-the-protestant-bubble",
        
          title: "Looking outside the Protestant bubble",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/11/20/looking-outside-the-protestant-bubble/";
          
        },
      },{id: "post-healings-and-holiness-pentacostals-the-black-baptist-church-itinerant-women-and-spiritual-narratives",
        
          title: "Healings and Holiness, Pentacostals, the Black Baptist Church, Itinerant Women, and Spiritual Narratives...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/11/08/healings-and-holiness-pentacostals-the-black-baptist-church-itinerant-women-and-spiritual-narratives/";
          
        },
      },{id: "post-slides-from-text-mining-presentation",
        
          title: "Slides from Text-Mining Presentation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/11/04/slides-from-text-mining-presentation/";
          
        },
      },{id: "post-short-tutorial-cleaning-up-downloaded-files-draft",
        
          title: "Short Tutorial: Cleaning up downloaded files (draft)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/11/04/short-tutorial-cleaning-up-downloaded-files-draft/";
          
        },
      },{id: "post-beautiful-soup-tutorial",
        
          title: "Beautiful Soup Tutorial",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/11/04/beautiful-soup-tutorial-part-1/";
          
        },
      },{id: "post-question-for-this-week-amp-8217-s-digital-praxis",
        
          title: "Question for this week&amp;#8217;s Digital Praxis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/11/01/question-for-this-weeks-digital-praxis/";
          
        },
      },{id: "post-mormon-week",
        
          title: "Mormon Week",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/10/18/mormon-week/";
          
        },
      },{id: "post-it-amp-8217-s-october-and-i-amp-8217-ve-run-out-of-catchy-titles-amp-8230",
        
          title: "It&amp;#8217;s October and I&amp;#8217;ve run out of catchy titles &amp;#8230;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/10/18/its-october-and-ive-run-out-of-catchy-titles/";
          
        },
      },{id: "post-slides-with-links",
        
          title: "Slides with Links",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/10/12/slides-with-links/";
          
        },
      },{id: "post-learning-how-to-scrape-or-how-to-fill-up-your-harddrive-really-quickly",
        
          title: "Learning how to scrape (or how to fill up your harddrive really quickly)...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/10/11/learning-how-to-scrape-or-how-to-fill-up-your-harddrive-really-quickly/";
          
        },
      },{id: "post-looking-west",
        
          title: "Looking west",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/10/04/looking-west/";
          
        },
      },{id: "post-lessons-learned",
        
          title: "Lessons Learned",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/10/04/lessons-learned/";
          
        },
      },{id: "post-victor-turner-betwixt-and-between-the-liminal-period-amp-8221",
        
          title: "Victor Turner, “Betwixt and Between: The Liminal Period&amp;#8221;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/27/victor-turner-betwixt-and-between-the-liminal-period/";
          
        },
      },{id: "post-updates-for-digital-praxis",
        
          title: "Updates for Digital Praxis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/27/updates-for-digital-praxis/";
          
        },
      },{id: "post-reflections-for-amp-8220-theory-week-amp-8221",
        
          title: "Reflections for &amp;#8220;Theory Week&amp;#8221;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/27/reflections-for-theory-week/";
          
        },
      },{id: "post-linda-kerber-amp-8220-the-republican-mother-women-and-the-enlightenment-an-american-perspective-amp-8221",
        
          title: "Linda Kerber, &amp;#8220;The Republican Mother: Women and the Enlightenment – An American Perspective&amp;#8221;...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/27/linda-kerber-the-republican-mother-women-and-the-enlightenment-an-american-perspective/";
          
        },
      },{id: "post-linda-kerber-amp-8220-separate-spheres-female-worlds-woman-s-place-the-rhetoric-of-women-s-history-amp-8221",
        
          title: "Linda Kerber, &amp;#8220;Separate Spheres, Female Worlds, Woman’s Place: The Rhetoric of Women’s History&amp;#8221;...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/27/linda-kerber-separate-spheres-female-worlds-womans-place-the-rhetoric-of-womens-history/";
          
        },
      },{id: "post-judith-butler-gender-trouble-prefaces-subjects-of-sex-gender-desire-conclusion",
        
          title: "Judith Butler, Gender Trouble [Prefaces, Subjects of Sex/Gender/Desire, Conclusion]",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/27/judith-butler-gender-trouble-prefaces-subjects-of-sexgenderdesire-conclusion/";
          
        },
      },{id: "post-joan-wallach-scott-gender-a-useful-category-of-historical-analysis",
        
          title: "Joan Wallach Scott, “Gender: a Useful Category of Historical Analysis.”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/27/joan-wallach-scott-gender-a-useful-category-of-historical-analysis/";
          
        },
      },{id: "post-evelyn-brook-higginbotham-african-american-women-and-the-metalanguage-of-race",
        
          title: "Evelyn Brook Higginbotham, “African-American Women and the Metalanguage of Race.”",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/27/evelyn-brook-higginbotham-african-american-women-and-the-metalanguage-of-race/";
          
        },
      },{id: "post-emile-durkheim-the-elementary-forms-of-religious-life-selections",
        
          title: "Emile Durkheim, The Elementary Forms of Religious Life [Selections]",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/27/emile-durkheim-the-elementary-forms-of-religious-life-selections/";
          
        },
      },{id: "post-carroll-smith-rosenberg-amp-8220-the-cross-and-the-pedestal-amp-8221",
        
          title: "Carroll Smith-Rosenberg, &amp;#8220;The Cross and the Pedestal&amp;#8221;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/20/carroll-smith-rosenberg-the-cross-and-the-pedestal/";
          
        },
      },{id: "post-carroll-smith-rosenberg-amp-8220-female-world-of-love-and-ritual-amp-8221",
        
          title: "Carroll Smith-Rosenberg, &amp;#8220;Female World of Love and Ritual&amp;#8221;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/20/carroll-smith-rosenberg-female-world-of-love-and-ritual/";
          
        },
      },{id: "post-goodness",
        
          title: "goodness..",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/19/goodness/";
          
        },
      },{id: "post-lt-em-gt-women-called-to-witness-lt-em-gt-by-nancy-hardesty",
        
          title: "&lt;em&gt;Women Called to Witness&lt;/em&gt;, by Nancy Hardesty",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/06/women-called-to-witness-by-nancy-hardesty/";
          
        },
      },{id: "post-lt-em-gt-the-religious-world-of-antislavery-women-lt-em-gt-by-anna-speicher",
        
          title: "&lt;em&gt;The Religious World of Antislavery Women&lt;/em&gt;, by Anna Speicher",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/06/the-religious-world-of-antislavery-women-by-anna-speicher/";
          
        },
      },{id: "post-reflections-on-quakers-and-antebellum-reform",
        
          title: "Reflections on Quakers and Antebellum Reform",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/06/reflections-on-quakers-and-antebellum-reform/";
          
        },
      },{id: "post-sandra-stanley-holton-lt-i-gt-quaker-women-lt-i-gt",
        
          title: "Sandra Stanley Holton, &lt;i&gt;Quaker Women&lt;/i&gt;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/06/quaker-women-by-sandra-stanley-holton/";
          
        },
      },{id: "post-lt-em-gt-cosmos-crumbling-lt-em-gt-by-robert-h-abzug",
        
          title: "&lt;em&gt;Cosmos Crumbling&lt;/em&gt;, by Robert H. Abzug",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/06/cosmos-crumbling-by-robert-h-abzug/";
          
        },
      },{id: "post-beginning-the-minor-field-readings",
        
          title: "Beginning the Minor Field Readings",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/06/beginning-the-minor-field-readings/";
          
        },
      },{id: "post-new-semester-new-course-new-adventures",
        
          title: "New Semester, New Course, New Adventures",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/09/02/new-semester-new-course-new-adventures/";
          
        },
      },{id: "post-remembering-the-humanities-in-digital-humanities",
        
          title: "remembering the humanities in digital humanities",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/05/17/rediscovering-the-humanities-in-digital-humanities/";
          
        },
      },{id: "post-hist-697-backing-away-amp-8230",
        
          title: "Hist 697: Backing away&amp;#8230;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/05/06/hist-697-backing-away/";
          
        },
      },{id: "post-hist-697-design-is-up",
        
          title: "Hist 697: Design is up.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/04/14/hist-697-design-is-up/";
          
        },
      },{id: "post-hist-697-what-does-digital-scholarship-look-like",
        
          title: "Hist 697: What does digital scholarship look like?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/04/09/digital-scholarship-2/";
          
        },
      },{id: "post-hist-697-visual-architecture",
        
          title: "Hist 697: Visual Architecture",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/04/01/hist-697-visual-architecture/";
          
        },
      },{id: "post-hist-697-creating-arguments-for-everyone",
        
          title: "Hist 697: Creating Arguments for Everyone",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/03/26/hist-697-creating-arguments-for-everyone/";
          
        },
      },{id: "post-hist-697-and-done",
        
          title: "Hist 697: And done!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/03/19/and-done/";
          
        },
      },{id: "post-hist-697-detente-with-photoshop",
        
          title: "Hist 697: Detente with Photoshop",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/03/05/detante-with-photoshop/";
          
        },
      },{id: "post-hist-697-impasse-with-photoshop",
        
          title: "Hist 697: Impasse with Photoshop",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/02/27/impasse-with-photoshop/";
          
        },
      },{id: "post-hist-697-typography-part-2",
        
          title: "Hist 697: Typography, part 2",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/02/20/typography-part-2/";
          
        },
      },{id: "post-hist-697-typography-part-1-5",
        
          title: "Hist 697: Typography, part 1.5",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/02/13/typography-part-1-5/";
          
        },
      },{id: "post-hist-697-typography-part-1",
        
          title: "Hist 697: Typography, part 1",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/02/06/typography-part-1/";
          
        },
      },{id: "post-hist-697-portfolio-is-live",
        
          title: "Hist 697: Portfolio is live",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/02/04/portfolio-is-live/";
          
        },
      },{id: "post-hist-697-it-amp-8217-s-how-you-say-it",
        
          title: "Hist 697: It&amp;#8217;s how you say it.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2012/01/30/its-how-you-say-it/";
          
        },
      },{id: "post-thoughts-on-scholarship",
        
          title: "Thoughts on Scholarship",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/12/23/thoughts-on-scholarship/";
          
        },
      },{id: "post-hist-696-what-difference-does-history-make-for-new-media",
        
          title: "Hist 696: what difference does history make for new media?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/12/05/what-difference-does-history-make-for-new-media/";
          
        },
      },{id: "post-hist-696-project",
        
          title: "Hist 696: Project",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/11/30/project/";
          
        },
      },{id: "post-hist-696-copyright-open-access-and-me",
        
          title: "Hist 696: Copyright, Open Access and me",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/11/21/copyright-open-access-and-me/";
          
        },
      },{id: "post-hist-696-engaging-the-crowd",
        
          title: "Hist 696: Engaging the crowd",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/11/13/engaging-the-crowd/";
          
        },
      },{id: "post-hist-696-visual-arguments-and-non-linear-logic",
        
          title: "Hist 696: Visual arguments and non-linear logic.",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/11/06/visual-arguments-and-non-linear-logic/";
          
        },
      },{id: "post-hist-696-digging-into-data",
        
          title: "Hist 696: Digging into Data",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/10/30/digging-into-data/";
          
        },
      },{id: "post-hist-696-amp-8220-digital-scholarship-amp-8221",
        
          title: "Hist 696: &amp;#8220;Digital Scholarship&amp;#8221;",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/10/24/digital-scholarship/";
          
        },
      },{id: "post-hist-696-reflections-and-final-draft",
        
          title: "Hist 696: Reflections and Final Draft",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/10/17/reflections-and-final-draft/";
          
        },
      },{id: "post-hist-696-manovich",
        
          title: "Hist 696: Manovich",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/10/17/manovich/";
          
        },
      },{id: "post-hist-696-prezi",
        
          title: "Hist 696: Prezi!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/10/11/prezi/";
          
        },
      },{id: "post-hist-696-save-the-data",
        
          title: "Hist 696: Save the Data!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/10/03/save-the-data/";
          
        },
      },{id: "post-hist-696-draft-of-grant-proposal",
        
          title: "Hist 696: Draft of Grant Proposal",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/10/03/draft-of-grant-proposal/";
          
        },
      },{id: "post-hist-696-the-details",
        
          title: "Hist 696: The Details",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/09/18/the-details/";
          
        },
      },{id: "post-hist-696-thoughts-on-the-history-of-digital-history",
        
          title: "Hist 696: Thoughts on the history of Digital History",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/09/09/hello-world-2/";
          
        },
      },{id: "post-the-perils-of-digitization",
        
          title: "The perils of digitization",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2011/02/17/the-perils-of-digitization/";
          
        },
      },{id: "post-what-i-do-on-sundays-tuesdays-and-wednesdays",
        
          title: "What I do on Sundays, Tuesdays, and Wednesdays",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2010/02/28/what-i-do-on-sundays-tuesdays-and-wednesday/";
          
        },
      },{id: "post-the-lenten-season-approaches",
        
          title: "The lenten season approaches",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2010/02/03/the-lenten-season-approaches/";
          
        },
      },{id: "projects-the-rel-digital-lab",
          title: 'The REL Digital Lab',
          description: "Infrastructure for digital scholarship to support the Department of Religious Studies at the University of Alabama.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RELdl/";
            },},{id: "projects-dh-bridge",
          title: 'DH Bridge',
          description: "Curriculum and workshops developed to teach computational thinking for the humanities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dhbridge/";
            },},{id: "projects-a-gospel-of-health-and-salvation",
          title: 'A Gospel of Health and Salvation',
          description: "Digital Dissertation on Seventh-day Adventism, religion, and gender in American culture.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dissertation/";
            },},{id: "projects-project-canterbury",
          title: 'Project Canterbury',
          description: "Theme design and implementation for the Project Canterbury web site.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-canterbury/";
            },},{id: "projects-course-projects",
          title: 'Course Projects',
          description: "Work completed as final projects for classes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/projects-courses/";
            },},{id: "projects-scarcity-in-abundance",
          title: 'Scarcity in Abundance',
          description: "Evaluating OCR for Computational Analysis. A study of methods to identify types of OCR errors and measure the effects of errors on NLP tasks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scarcity-in-abundance/";
            },},{id: "projects-scholarly-edition-of-seventh-day-adventist-periodical-literature",
          title: 'Scholarly Edition of Seventh-day Adventist periodical literature',
          description: "Curated collection of digitized periodicals, with descriptive metadata, historical context, and text for computational analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scholarly-edition/";
            },},{id: "projects-of-time-and-topics",
          title: 'Of Time and Topics',
          description: "A reimagining of the digital dissertation for print. A study in digital history methods and American Religious History.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tie-that-binds/";
            },},{id: "projects-roy-rosenzweig-center-for-history-and-new-media",
          title: 'Roy Rosenzweig Center for History and New Media',
          description: "Work completed as a Graduate Research Assistant at RRCHNM.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work-chnm/";
            },},{id: "projects-mason-publishing-group",
          title: 'Mason Publishing Group',
          description: "Work completed in role as Digital Publishing Production Lead.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work-publishing/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jerielizabeth", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jeriwieringa", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-9364-2808", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://cdh.princeton.edu/people/jeri-wieringa/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
