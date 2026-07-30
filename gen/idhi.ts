export type NamedThingId = string;
export type AgentId = string;
export type PersonId = string;
export type OrganizationId = string;
export type AcademicInstitutionId = string;
export type GLAMInstitutionId = string;
export type ResearchCenterId = string;
export type FunderId = string;
export type CompanyId = string;
export type NonProfitId = string;
export type FacilityId = string;
export type ProjectId = string;
export type ToolId = string;
export type ServiceId = string;
export type PublicationId = string;
export type EventId = string;
export type LocationId = string;
export type TimePeriodId = string;
export type CatalogId = string;
export type DatasetId = string;
/**
* Languages supported for free-text fields (BCP-47 tags).
*/
export enum LanguageEnum {
    
    /** English */
    en = "en",
    /** Hebrew */
    he = "he",
    /** Arabic */
    ar = "ar",
};
/**
* Digital-humanities research activities, as any TaDiRAH 2.0 research-activity concept: the 7 top concepts (Analyzing, Capturing, Creating, Disseminating, Enriching, Interpreting, Storing) or any narrower concept reachable beneath them via skos:narrower (e.g. tadirah:topicModeling).
*/
export enum DigitalHumanitiesActivityEnum {
    
    /** Wikidata contributors, "Q25501084," Wikidata, https://www.wikidata.org/w/index.php?title=Q25501084&oldid=1231655399 (accessed September 4, 2020). */
    Abstract_Thinking = "tadirah:abstractThinking",
    /** subfield of publishing which distributes academic research and scholarship (Wikidata contributors, "Q5246046," Wikidata, https://www.wikidata.org/w/index.php?title=Q5246046&oldid=1266348457 (accessed September 4, 2020). */
    Academic_Publishing = "tadirah:academicPublishing",
    /** arithmetic operation (Wikidata contributors, "Q32043," Wikidata, https://www.wikidata.org/w/index.php?title=Q32043&oldid=1268649023 (accessed September 4, 2020). */
    Adding = "tadirah:adding",
    /** act of collecting together physical or conceptual objects (Wikidata contributors, "Q23007394," Wikidata, https://www.wikidata.org/w/index.php?title=Q23007394&oldid=1210318642 (accessed September 4, 2020). */
    Aggregating = "tadirah:aggregating",
    Analyzing = "tadirah:analyzing",
    Annotating = "tadirah:annotating",
    Archiving = "tadirah:archiving",
    /** Wikidata contributors, "Q2868277," Wikidata, https://www.wikidata.org/w/index.php?title=Q2868277&oldid=1256900973 (accessed September 4, 2020). */
    Associate = "tadirah:associate",
    /** Wikidata contributors, "Q98847960," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847960&oldid=1270669574 (accessed September 4, 2020). */
    Associating = "tadirah:associating",
    /** Wikidata contributors, "Q98847703," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847703&oldid=1270667708 (accessed September 4, 2020). */
    Audio_Annotation = "tadirah:audioAnnotation",
    /** Wikidata contributors, "Q58199," Wikidata, https://www.wikidata.org/w/index.php?title=Q58199&oldid=1228360894 (accessed September 4, 2020). */
    Audio_Conferencing = "tadirah:audioConferencing",
    /** mechanical or digital record of a series of audio events (Wikidata contributors, "Q3302947," Wikidata, https://www.wikidata.org/w/index.php?title=Q3302947&oldid=1254901544 (accessed September 4, 2020). */
    Audio_Recording = "tadirah:audioRecording",
    Authorship_Attribution = "tadirah:authorshipAttribution",
    /** Wikidata contributors, "Q98847577," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847577&oldid=1270666738 (accessed September 4, 2020). */
    Bit_Stream_Preservation = "tadirah:bitStreamPreservation",
    /** action of writing articles or maintaining a weblog (Wikidata contributors, "Q21124681," Wikidata, https://www.wikidata.org/w/index.php?title=Q21124681&oldid=1262333720 (accessed September 4, 2020). */
    Blogging = "tadirah:blogging",
    /** exploratory use of an information system (Wikidata contributors, "Q516508," Wikidata, https://www.wikidata.org/w/index.php?title=Q516508&oldid=1169408380 (accessed July 30, 2020). */
    Browsing = "tadirah:browsing",
    Capturing = "tadirah:capturing",
    /** process of listing information resources for inclusion in a database (Wikidata contributors, "Q3535655," Wikidata, https://www.wikidata.org/w/index.php?title=Q3535655&oldid=1256785269 (accessed September 4, 2020). */
    Cataloging = "tadirah:cataloging",
    /** task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar (in some sense or another) to each other than to those in other groups (clusters) (Wikidata contributors, "Q622825," Wikidata, https://www.wikidata.org/w/index.php?title=Q622825&oldid=1212288392 (accessed July 30, 2020). */
    Cluster_Analysis = "tadirah:clusterAnalysis",
    Co_Occurrence = "tadirah:coOccurrence",
    Collaborating = "tadirah:collaborating",
    Collating = "tadirah:collating",
    /** purposefully gathering items (Wikidata contributors, "Q208165," Wikidata, https://www.wikidata.org/w/index.php?title=Q208165&oldid=1249560517 (accessed September 4, 2020). */
    Collecting = "tadirah:collecting",
    Collocation_Analysis = "tadirah:collocationAnalysis",
    Commenting = "tadirah:commenting",
    Communicating = "tadirah:communicating",
    /** Wikidata contributors, "Q98845331," Wikidata, https://www.wikidata.org/w/index.php?title=Q98845331&oldid=1270639313 (accessed September 4, 2020). */
    Comparing = "tadirah:comparing",
    /** translation of code written in a higher-level programming language to a lower-level form (Wikidata contributors, "Q56248166," Wikidata, https://www.wikidata.org/w/index.php?title=Q56248166&oldid=1230644647 (accessed September 4, 2020). */
    Compiling = "tadirah:compiling",
    Conceptualizing = "tadirah:conceptualizing",
    /** list of words or terms in a published book (Wikidata contributors, "Q839018," Wikidata, https://www.wikidata.org/w/index.php?title=Q839018&oldid=1228232199 (accessed July 30, 2020). */
    Concordance = "tadirah:concordance",
    Content_Analysis = "tadirah:contentAnalysis",
    Contextualizing = "tadirah:contextualizing",
    /** Wikidata contributors, "Q614959," Wikidata, https://www.wikidata.org/w/index.php?title=Q614959&oldid=1118155497 (accessed September 4, 2020). */
    Contrastive_Analysis = "tadirah:contrastiveAnalysis",
    Converting = "tadirah:converting",
    /** Wikidata contributors, "Q98848041," Wikidata, https://www.wikidata.org/w/index.php?title=Q98848041&oldid=1270670016 (accessed September 4, 2020). */
    Correcting = "tadirah:correcting",
    Creating = "tadirah:creating",
    /** to remove unwanted outer parts of an image (Wikidata contributors, "Q785116," Wikidata, https://www.wikidata.org/w/index.php?title=Q785116&oldid=1110149634 (accessed September 4, 2020). */
    Cropping = "tadirah:cropping",
    Crowdsourcing = "tadirah:crowdsourcing",
    Data_Cleansing = "tadirah:dataCleansing",
    /** Wikidata contributors, "Q98847455," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847455&oldid=1270665713 (accessed September 4, 2020). */
    Data_Ingestion = "tadirah:dataIngestion",
    /** process of linking data objects in distinct models (Wikidata contributors, "Q2330408," Wikidata, https://www.wikidata.org/w/index.php?title=Q2330408&oldid=1185372641 (accessed September 4, 2020). */
    Data_Mapping = "tadirah:dataMapping",
    /** process of discovering patterns in large data sets using computational methods at the intersection of statistics, database systems, or machine learning (Wikidata contributors, "Q172491," Wikidata, https://www.wikidata.org/w/index.php?title=Q172491&oldid=1268899513 (accessed September 4, 2020). */
    Data_Mining = "tadirah:dataMining",
    Data_Recognition = "tadirah:dataRecognition",
    /** creation and study of the visual representation of data (Wikidata contributors, "Q6504956," Wikidata, https://www.wikidata.org/w/index.php?title=Q6504956&oldid=1258700005 (accessed September 4, 2020). */
    Data_Visualization = "tadirah:dataVisualization",
    /** the process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system (Wikidata contributors, "Q845566," Wikidata, https://www.wikidata.org/w/index.php?title=Q845566&oldid=1240856516 (accessed July 30, 2020). */
    Debugging = "tadirah:debugging",
    /** statement that attaches a meaning to a term (Wikidata contributors, "Q101072," Wikidata, https://www.wikidata.org/w/index.php?title=Q101072&oldid=1267587775 (accessed September 4, 2020). */
    Defining = "tadirah:defining",
    /** text for clarification; one of four rhetorical modes (Wikidata contributors, "Q1200750," Wikidata, https://www.wikidata.org/w/index.php?title=Q1200750&oldid=1266102146 (accessed September 5, 2020). */
    Description = "tadirah:description",
    Designing = "tadirah:designing",
    /** Wikidata contributors, "Q98845265," Wikidata, https://www.wikidata.org/w/index.php?title=Q98845265&oldid=1270638355 (accessed September 4, 2020). */
    Diagramming = "tadirah:diagramming",
    /** character string used as a permanent identifier for a digital object, in a format controlled by the International DOI Foundation (Wikidata contributors, "Q25670," Wikidata, https://www.wikidata.org/w/index.php?title=Q25670&oldid=1280060100 (accessed September 24, 2020). */
    Digital_Object_Identifier = "tadirah:digitalObjectIdentifier",
    /** Wikidata contributors, "Q1224844," Wikidata, https://www.wikidata.org/w/index.php?title=Q1224844&oldid=573797951 (accessed September 4, 2020). */
    Digital_Publishing = "tadirah:digitalPublishing",
    /** generic term for the analysis of social, language policy or historiographical discourse phenomena (Wikidata contributors, "Q1129466," Wikidata, https://www.wikidata.org/w/index.php?title=Q1129466&oldid=1269534863 (accessed September 4, 2020). */
    Discourse_Analysis = "tadirah:discourseAnalysis",
    Discovering = "tadirah:discovering",
    /** Wikidata contributors, "Q98847226," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847226&oldid=1270663604 (accessed September 4, 2020). */
    Discussing = "tadirah:discussing",
    Disseminating = "tadirah:disseminating",
    /** definitions for distance between two objects or events in the universe (Wikidata contributors, "Q1344778," Wikidata, https://www.wikidata.org/w/index.php?title=Q1344778&oldid=1172224550 (accessed July 30, 2020). */
    Distance_Measures = "tadirah:distanceMeasures",
    /** visual artwork in two-dimensional medium (Wikidata contributors, "Q93184," Wikidata, https://www.wikidata.org/w/index.php?title=Q93184&oldid=1269736568 (accessed September 4, 2020). */
    Drawing = "tadirah:drawing",
    /** Wikidata contributors, "Q386274," Wikidata, https://www.wikidata.org/w/index.php?title=Q386274&oldid=855343099 (accessed September 4, 2020). */
    E_mailing = "tadirah:eMailing",
    Editing = "tadirah:editing",
    /** system that emulates a real system such that the behavior closely resembles the behavior of the real system (Wikidata contributors, "Q202871," Wikidata, https://www.wikidata.org/w/index.php?title=Q202871&oldid=1159572399 (accessed July 30, 2020). */
    Emulation = "tadirah:emulation",
    /** process of creating a message for transmission (Wikidata contributors, "Q5375490," Wikidata, https://www.wikidata.org/w/index.php?title=Q5375490&oldid=1224419731 (accessed July 30, 2020). */
    Encoding = "tadirah:encoding",
    Enriching = "tadirah:enriching",
    /** set of statements constructed to describe a set of facts (Wikidata contributors, "Q7958," Wikidata, https://www.wikidata.org/w/index.php?title=Q7958&oldid=1255429522 (accessed September 4, 2020). */
    Explanation = "tadirah:explanation",
    /** act of searching or traveling around a terrain for the purpose of discovery (Wikidata contributors, "Q6502154," Wikidata, https://www.wikidata.org/w/index.php?title=Q6502154&oldid=1238428839 (accessed September 4, 2020). */
    Exploration = "tadirah:exploration",
    Expressing_Opinion = "tadirah:expressingOpinion",
    Extracting = "tadirah:extracting",
    /** Wikidata contributors, "Q28195064," Wikidata, https://www.wikidata.org/w/index.php?title=Q28195064&oldid=559043572 (accessed September 4, 2020). */
    Finding = "tadirah:finding",
    /** Wikidata contributors, "Q98848248," Wikidata, https://www.wikidata.org/w/index.php?title=Q98848248&oldid=1270671201 (accessed September 4, 2020). */
    Formatting = "tadirah:formatting",
    /** the use of game thinking and game mechanics in non-game contexts to engage users in solving problems (Wikidata contributors, "Q1067402," Wikidata, https://www.wikidata.org/w/index.php?title=Q1067402&oldid=1233709490 (accessed July 30, 2020). */
    Gamification = "tadirah:gamification",
    Gathering = "tadirah:gathering",
    Genre_Recognition = "tadirah:genreRecognition",
    /** identification of something to locations in physical space (Wikidata contributors, "Q772007," Wikidata, https://www.wikidata.org/w/index.php?title=Q772007&oldid=1240907550 (accessed September 4, 2020). */
    Georeferencing = "tadirah:georeferencing",
    /** Wikidata contributors, "Q98845304," Wikidata, https://www.wikidata.org/w/index.php?title=Q98845304&oldid=1270638847 (accessed September 4, 2020). */
    Graphics_Programming = "tadirah:graphicsProgramming",
    /** Wikidata contributors, "Q98847905," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847905&oldid=1270669260 (accessed September 4, 2020). */
    Highlighting = "tadirah:highlighting",
    /** name that identifies either a unique object or a unique class of objects (Wikidata contributors, "Q853614," Wikidata, https://www.wikidata.org/w/index.php?title=Q853614&oldid=1265951822 (accessed September 4, 2020). */
    Identifier = "tadirah:identifier",
    Identifying = "tadirah:identifying",
    Imaging = "tadirah:imaging",
    /** process of a thing moving from one state to another that is considered to be better, usually through some action intended to bring about that better state (Wikidata contributors, "Q21255975," Wikidata, https://www.wikidata.org/w/index.php?title=Q21255975&oldid=1264546813 (accessed September 4, 2020). */
    Improving = "tadirah:improving",
    /** Wikidata contributors, "Q98847165," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847165&oldid=1270662707 (accessed September 4, 2020). */
    Information_Mining = "tadirah:informationMining",
    /** activity of obtaining information resources relevant to an information need from a collection of information resources (Wikidata contributors, "Q816826," Wikidata, https://www.wikidata.org/w/index.php?title=Q816826&oldid=1228359828 (accessed July 30, 2020). */
    Information_Retrieval = "tadirah:informationRetrieval",
    /** form of communication over the Internet (Wikidata contributors, "Q58199," Wikidata, https://www.wikidata.org/w/index.php?title=Q58199&oldid=1228360894 (accessed September 4, 2020). */
    Instant_Messaging = "tadirah:instantMessaging",
    /** Wikidata contributors, "Q98847635," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847635&oldid=1270667187 (accessed September 4, 2020). */
    Integrating = "tadirah:integrating",
    Interpreting = "tadirah:interpreting",
    /** Wikidata contributors, "Q98847144," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847144&oldid=1270662396 (accessed September 4, 2020). */
    Knowledge_Discovery = "tadirah:knowledgeDiscovery",
    /** creation of knowledge from structured and unstructured sources (Wikidata contributors, "Q1582085," Wikidata, https://www.wikidata.org/w/index.php?title=Q1582085&oldid=1235011290 (accessed September 4, 2020). */
    Knowledge_Extraction = "tadirah:knowledgeExtraction",
    /** Wikidata contributors, "Q2554325," Wikidata, https://www.wikidata.org/w/index.php?title=Q2554325&oldid=1114054839 (accessed September 4, 2020). */
    Lemmatizing = "tadirah:lemmatizing",
    /** creation of hand-drawn letters in graphic design and typography (Wikidata contributors, "Q5538738," Wikidata, https://www.wikidata.org/w/index.php?title=Q5538738&oldid=1222349737 (accessed September 4, 2020). */
    Lettering = "tadirah:lettering",
    /** linked data available under an open license (Wikidata contributors, "Q18692990," Wikidata, https://www.wikidata.org/w/index.php?title=Q18692990&oldid=1229182996 (accessed July 30, 2020). */
    Linked_Open_Data = "tadirah:linkedOpenData",
    /** branch of statistics and computer science, which studies algorithms and architectures that learn from observed facts (Wikidata contributors, "Q2539," Wikidata, https://www.wikidata.org/w/index.php?title=Q2539&oldid=1228523395 (accessed July 30, 2020). */
    Machine_Learning = "tadirah:machineLearning",
    /** influence or authority over something; process of directing the operation of a device, system, or process (Wikidata contributors, "Q29017603," Wikidata, https://www.wikidata.org/w/index.php?title=Q29017603&oldid=1238420285 (accessed September 4, 2020). */
    Managing = "tadirah:managing",
    /** binary relation which is left-total (defined on all its input set) (Wikidata contributors, "Q370502," Wikidata, https://www.wikidata.org/w/index.php?title=Q370502&oldid=1183603611 (accessed September 4, 2020). */
    Mapping = "tadirah:mapping",
    /** Wikidata contributors, "Q98848337," Wikidata, https://www.wikidata.org/w/index.php?title=Q98848337&oldid=1270671768 (accessed September 4, 2020). */
    Merging = "tadirah:merging",
    /** broadcast medium (Wikidata contributors, "Q92438," Wikidata, https://www.wikidata.org/w/index.php?title=Q92438&oldid=1237465325 (accessed September 4, 2020). */
    Microblogging = "tadirah:microblogging",
    /** process of selecting, preparing, extracting, and transforming data and permanently transferring it from one computer storage system to another (Wikidata contributors, "Q1932543," Wikidata, https://www.wikidata.org/w/index.php?title=Q1932543&oldid=1212596075 (accessed July 30, 2020). */
    Migration = "tadirah:migration",
    /** Wikidata contributors, "Q98846887," Wikidata, https://www.wikidata.org/w/index.php?title=Q98846887&oldid=1270658470 (accessed September 4, 2020). */
    Mind_Mapping = "tadirah:mindMapping",
    Modeling = "tadirah:modeling",
    /** Wikidata contributors, "Q98848358," Wikidata, https://www.wikidata.org/w/index.php?title=Q98848358&oldid=1270671956 (accessed September 4, 2020). */
    Modifying = "tadirah:modifying",
    /** extraction of named entity mentions in unstructured text into pre-defined categories (Wikidata contributors, "Q403574," Wikidata, https://www.wikidata.org/w/index.php?title=Q403574&oldid=1232404694 (accessed July 30, 2020). */
    Named_Entity_Recognition = "tadirah:namedEntityRecognition",
    /** set of rules for naming variables, types, functions, etc. in programming (Wikidata contributors, "Q461984," Wikidata, https://www.wikidata.org/w/index.php?title=Q461984&oldid=1221175218 (accessed September 4, 2020). */
    Naming_Convention = "tadirah:namingConvention",
    /** field of computer science and linguistics (Wikidata contributors, "Q30642," Wikidata, https://www.wikidata.org/w/index.php?title=Q30642&oldid=1257963465 (accessed September 4, 2020). */
    Natural_Language_Processing = "tadirah:naturalLanguageProcessing",
    Network_Analysis = "tadirah:networkAnalysis",
    /** Wikidata contributors, "Q167555," Wikidata, https://www.wikidata.org/w/index.php?title=Q167555&oldid=1257963956 (accessed September 4, 2020). */
    Optical_Character_Recognition = "tadirah:opticalCharacterRecognition",
    /** Wikidata contributors, "Q1243229," Wikidata, https://www.wikidata.org/w/index.php?title=Q1243229&oldid=1126910841 (accessed September 4, 2020). */
    Optical_Music_Recognition = "tadirah:opticalMusicRecognition",
    Organizing = "tadirah:organizing",
    /** process of analyzing a string of symbols, either in natural language, computer languages or data structures, conforming to the rules of a formal grammar (Wikidata contributors, "Q194152," Wikidata, https://www.wikidata.org/w/index.php?title=Q194152&oldid=1264510115 (accessed September 4, 2020). */
    Parsing = "tadirah:parsing",
    /** branch of machine learning (Wikidata contributors, "Q378859," Wikidata, https://www.wikidata.org/w/index.php?title=Q378859&oldid=1234461159 (accessed July 30, 2020). */
    Pattern_Recognition = "tadirah:patternRecognition",
    /** long-lasting digital name (Wikidata contributors, "Q420330," Wikidata, https://www.wikidata.org/w/index.php?title=Q420330&oldid=1268700365 (accessed September 4, 2020). */
    Persistent_Identifier = "tadirah:persistentIdentifier",
    /** art, science, and practice of creating durable images by recording light or other electromagnetic radiation (Wikidata contributors, "Q11633," Wikidata, https://www.wikidata.org/w/index.php?title=Q11633&oldid=1237597469 (accessed July 30, 2020). */
    Photographing = "tadirah:photographing",
    /** Wikidata contributors, "Q98846923," Wikidata, https://www.wikidata.org/w/index.php?title=Q98846923&oldid=1270658999 (accessed September 4, 2020). */
    Plotting = "tadirah:plotting",
    /** the process of identifying the grammatical type of words in a text (Wikidata contributors, "Q1271424," Wikidata, https://www.wikidata.org/w/index.php?title=Q1271424&oldid=1167811400 (accessed July 30, 2020). */
    POS_Tagging = "tadirah:posTagging",
    /** content on a social media platform, a forum or a blog (Wikidata contributors, "Q1453674," Wikidata, https://www.wikidata.org/w/index.php?title=Q1453674&oldid=1178826153 (accessed September 4, 2020). */
    Posting = "tadirah:posting",
    /** Wikidata contributors, "Q28838080," Wikidata, https://www.wikidata.org/w/index.php?title=Q28838080&oldid=941780726 (accessed September 4, 2020). */
    Preprocessing = "tadirah:preprocessing",
    /** information that supports and documents acts of preservation on digital materials (Wikidata contributors, "Q7241044," Wikidata, https://www.wikidata.org/w/index.php?title=Q7241044&oldid=1202709309 (accessed July 30, 2020). */
    Preservation_Metadata = "tadirah:preservationMetadata",
    Preserving = "tadirah:preserving",
    /** conversion of a set of observations of possibly correlated variables into a set of values of linearly uncorrelated variables called principal components (Wikidata contributors, "Q2873," Wikidata, https://www.wikidata.org/w/index.php?title=Q2873&oldid=1237203694 (accessed July 30, 2020). */
    Principal_Component_Analysis = "tadirah:principalComponentAnalysis",
    Programming = "tadirah:programming",
    Pseudo_Coding = "tadirah:pseudoCoding",
    Publishing = "tadirah:publishing",
    /** Wikidata contributors, "Q98847088," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847088&oldid=1270661541 (accessed September 4, 2020). */
    Querying = "tadirah:querying",
    /** type of thought (Wikidata contributors, "Q1156402," Wikidata, https://www.wikidata.org/w/index.php?title=Q1156402&oldid=1265618386 (accessed September 4, 2020). */
    Reasoning = "tadirah:reasoning",
    Recording = "tadirah:recording",
    Relational_Analysis = "tadirah:relationalAnalysis",
    /** dissociation of the original object with its old part; moving an object on distance of disconnect; process of moving, or the fact of being removed (Wikidata contributors, "Q23009442," Wikidata, https://www.wikidata.org/w/index.php?title=Q23009442&oldid=1268618349 (accessed September 4, 2020). */
    Removing = "tadirah:removing",
    /** sharing information to ensure consistency in computing (Wikidata contributors, "Q1332873," Wikidata, https://www.wikidata.org/w/index.php?title=Q1332873&oldid=1221552165 (accessed July 30, 2020). */
    Replication = "tadirah:replication",
    /** Wikidata contributors, "Q98845926," Wikidata, https://www.wikidata.org/w/index.php?title=Q98845926&oldid=1270647161 (accessed September 4, 2020). */
    Rhetorical_Analysis = "tadirah:rhetoricalAnalysis",
    /** process of creating digital images with a scanner (Wikidata contributors, "Q59155052," Wikidata, https://www.wikidata.org/w/index.php?title=Q59155052&oldid=1184040702 (accessed July 30, 2020). */
    Scanning = "tadirah:scanning",
    /** digital recording of computer screen output (Wikidata contributors, "Q1365447," Wikidata, https://www.wikidata.org/w/index.php?title=Q1365447&oldid=1234996090 (accessed September 4, 2020). */
    Screencast = "tadirah:screencast",
    /** search for target data from a set of data (Wikidata contributors, "Q11540953," Wikidata, https://www.wikidata.org/w/index.php?title=Q11540953&oldid=1207018344 (accessed July 30, 2020). */
    Searching = "tadirah:searching",
    Segmenting = "tadirah:segmenting",
    Semantification = "tadirah:semantification",
    /** use of natural language processing, text analysis and computational linguistics to identify and extract subjective information in source materials (Wikidata contributors, "Q2271421," Wikidata, https://www.wikidata.org/w/index.php?title=Q2271421&oldid=1170108641 (accessed July 30, 2020). */
    Sentiment_Analysis = "tadirah:sentimentAnalysis",
    /** process in bioinformatics that aligns (identifies equivalent sites within) molecular sequences (Wikidata contributors, "Q827246," Wikidata, https://www.wikidata.org/w/index.php?title=Q827246&oldid=1228152501 (accessed July 30, 2020). */
    Sequence_Alignment = "tadirah:sequenceAlignment",
    Sharing = "tadirah:sharing",
    /** The process of building one's group of personal or business contacts (Wikidata contributors, "Q19368491," Wikidata, https://www.wikidata.org/w/index.php?title=Q19368491&oldid=1132647061 (accessed September 4, 2020). */
    Social_Networking = "tadirah:socialNetworking",
    Spatial_Analysis = "tadirah:spatialAnalysis",
    /** Wikidata contributors, "Q98846987," Wikidata, https://www.wikidata.org/w/index.php?title=Q98846987&oldid=1270659968 (accessed September 4, 2020). */
    Speech_Recognizing = "tadirah:speechRecognizing",
    Storing = "tadirah:storing",
    Structural_Analysis = "tadirah:structuralAnalysis",
    Stylistic_Analysis = "tadirah:stylisticAnalysis",
    Stylometry = "tadirah:stylometry",
    /** Wikidata contributors, "Q98848418," Wikidata, https://www.wikidata.org/w/index.php?title=Q98848418&oldid=1270672456 (accessed September 4, 2020). */
    Subtracting = "tadirah:subtracting",
    /** Wikidata contributors, "Q98848097," Wikidata, https://www.wikidata.org/w/index.php?title=Q98848097&oldid=1270670374 (accessed September 4, 2020). */
    Supplementing = "tadirah:supplementing",
    /** the act of labelling a piece of data or content wth a short string to express some metadata (Wikidata contributors, "Q43401994," Wikidata, https://www.wikidata.org/w/index.php?title=Q43401994&oldid=1198888121 (accessed September 4, 2020) */
    Tagging = "tadirah:tagging",
    Teaching = "tadirah:teaching",
    /** Wikidata contributors, "Q57771142," Wikidata, https://www.wikidata.org/w/index.php?title=Q57771142&oldid=1072020823 (accessed September 4, 2020). */
    Text_Categorization = "tadirah:textCategorization",
    /** act of typing and sending a brief, digital message (Wikidata contributors, "Q17166101," Wikidata, https://www.wikidata.org/w/index.php?title=Q17166101&oldid=1266645836 (accessed September 4, 2020). */
    Text_Messaging = "tadirah:textMessaging",
    Theorizing = "tadirah:theorizing",
    /** set of techniques in computational linguistics and related fields (Wikidata contributors, "Q96468792," Wikidata, https://www.wikidata.org/w/index.php?title=Q96468792&oldid=1211601100 (accessed July 30, 2020). */
    Topic_Modeling = "tadirah:topicModeling",
    /** direct digital-to-digital conversion of one encoding to another (Wikidata contributors, "Q1888734," Wikidata, https://www.wikidata.org/w/index.php?title=Q1888734&oldid=1225865439 (accessed September 4, 2020). */
    Transcoding = "tadirah:transcoding",
    /** transcribing describes  the activity of creating a representation of a manuscript or of audio or video recordings. The representation is generally textual for the verbal aspects of recordings and structured for example by speech turns. It can also contain multimodal information like gestures or events and multimedia information like time synchronization and relation to media files. */
    Transcribing = "tadirah:transcribing",
    /** process involving change into a qualitatively different form (Wikidata contributors, "Q65757353," Wikidata, https://www.wikidata.org/w/index.php?title=Q65757353&oldid=1268189392 (accessed September 4, 2020). */
    Transformation = "tadirah:transformation",
    Translating = "tadirah:translating",
    /** Wikidata contributors, "Q98845582," Wikidata, https://www.wikidata.org/w/index.php?title=Q98845582&oldid=1270642307 (accessed September 4, 2020). */
    Tree_Tagging = "tadirah:treeTagging",
    /** individual post on the Twitter microblogging service (Wikidata contributors, "Q56119332," Wikidata, https://www.wikidata.org/w/index.php?title=Q56119332&oldid=1249804975 (accessed September 4, 2020). */
    Tweet = "tadirah:tweet",
    /** string of characters used to identify a name of a resource on a network such as the internet (Wikidata contributors, "Q61694," Wikidata, https://www.wikidata.org/w/index.php?title=Q61694&oldid=1253478595 (accessed September 4, 2020). */
    Uniform_Resource_Identifier = "tadirah:uniformResourceIdentifier",
    /** sending of data from a local system to a remote system (Wikidata contributors, "Q7126699," Wikidata, https://www.wikidata.org/w/index.php?title=Q7126699&oldid=1267188395 (accessed September 4, 2020). */
    Upload = "tadirah:upload",
    /** online content created by users (Wikidata contributors, "Q579716," Wikidata, https://www.wikidata.org/w/index.php?title=Q579716&oldid=1244820573 (accessed September 4, 2020). */
    User_Generated_Content = "tadirah:userGeneratedContent",
    Versioning = "tadirah:versioning",
    /** Wikidata contributors, "Q2778015," Wikidata, https://www.wikidata.org/w/index.php?title=Q2778015&oldid=1112440881 (accessed September 4, 2020). */
    Video_Capture = "tadirah:videoCapture",
    /** type of conference (Wikidata contributors, "Q238354," Wikidata, https://www.wikidata.org/w/index.php?title=Q238354&oldid=1262194128 (accessed September 4, 2020). */
    Video_Conference = "tadirah:videoConference",
    /** editing live television and video production (Wikidata contributors, "Q1154312," Wikidata, https://www.wikidata.org/w/index.php?title=Q1154312&oldid=1149134104 (accessed September 4, 2020). */
    Video_Editing = "tadirah:videoEditing",
    Visual_Analysis = "tadirah:visualAnalysis",
    /** Wikidata contributors, "Q98847784," Wikidata, https://www.wikidata.org/w/index.php?title=Q98847784&oldid=1270668347 (accessed September 4, 2020). */
    Visual_Annotation = "tadirah:visualAnnotation",
    /** systematic access of resources across the web (Wikidata contributors, "Q61466324," Wikidata, https://www.wikidata.org/w/index.php?title=Q61466324&oldid=1232626072 (accessed July 30, 2020). */
    Web_Crawling = "tadirah:webCrawling",
    Web_Development = "tadirah:webDevelopment",
    /** data scraping used for extracting data from websites (Wikidata contributors, "Q665452," Wikidata, https://www.wikidata.org/w/index.php?title=Q665452&oldid=1203621822 (accessed September 4, 2020). */
    Web_Scraping = "tadirah:webScraping",
    /** Wikidata contributors, "Q98845203," Wikidata, https://www.wikidata.org/w/index.php?title=Q98845203&oldid=1270637566 (accessed September 4, 2020). */
    Wireframing = "tadirah:wireframing",
    /** writing designates the activity of creating new texts (instead of capturing existing text). Here, it primarily concerns research papers and reports, but may include other textually-oriented objects. */
    Writing = "tadirah:writing",
};
/**
* The kind of publication, as any concept from the COAR Resource Types vocabulary (the de-facto repository standard, required by OpenAIRE) — e.g. coar:c_6501 (journal article), coar:c_3248 (book part), coar:c_5794 (conference paper), coar:c_46ec (thesis).
*/
export enum PublicationTypeEnum {
    
    /** A set of judicial proceedings that record, physically or digitally, and in an orderly fashion, the development of a process or procedural actions so that they may be recorded and examined by the parties. This would include the set of judicial proceedings and any item within that set as a physical or electronic court document. Adapted from https://dpej.rae.es/lema/expediente-judicial with input from https://www.supremecourt.gov/case_documents.aspx */
    court_documents = "coar:1YTN-RJZE",
    /** Geospatial data are any type of data with spatial coordinates that allow them to be mapped to the Earth's surface. They can represent physical objects, discrete areas or continuous surfaces. Discrete geospatial data are usually represented using vector data consisting of points, lines and polygons, while continuous geospatial data are usually represented by raster data, consisting of a grid of cells that each has its own value. Any number of applications in a wide range of areas produce geospatial data, such as GIS, Remote Sensing equipment, GPS units, archaeological total stations, manual mapping and computer-aided design (CAD), in a number of formats, including images, vector, text, and tabular data. Vector-based geospatial data include tables listing archaeological sites along with their coordinates, text-based files (e.g., XML) containing coordinates and topology for historic road networks, voting figures for political parties by administrative area. Raster-based geospatial data include satellite images, aerial photographs, scanned maps, and digital maps of elevations, vegetation, land-use, sea surface temperatures, air pollution, soil-types, etc. [Source: https://ddialliance.org/Specification/DDI-CV/GeneralDataFormat_2.0.html] */
    geospatial_data = "coar:2H0M-X761",
    /** An Item appearing in a magazine (a general interest or specific focus periodical). This item is often shorter in length, is submitted by in-house and external authors. Adapted from MAGAZINE Definition & Meaning - Black's Law Dictionary (thelawdictionary.org) */
    magazine_article = "coar:43KC-T6DC",
    /** Plans, drawing or set of drawings showing how something e.g. building, product is to be made and how it will work and look. [Source: Adapted from https://dictionary.cambridge.org/dictionary/english/design] */
    design = "coar:542X-3S04",
    /** Data resulting from the experimental research method involving the manipulation of some or all of the independent variables included in the hypotheses. [Source: Adapted from https://ddialliance.org/Specification/DDI-CV/ModeOfCollection_3.0.html] */
    experimental_data = "coar:63NG-B465",
    /** A written record of words spoken in court proceedings or in a speech, interview, broadcast, or sound recording. [Source: Adapted from https://products.abc-clio.com/ODLIS/odlis_t.aspx] */
    transcription = "coar:6NC7-GK9S",
    /** A device, tool or apparatus used to obtain, measure and/or analyze data. Source https://datacite-metadata-schema.readthedocs.io/en/4.5/appendices/appendix-1/resourceTypeGeneral/#instrument */
    research_instrument = "coar:8KJG-QS0Y",
    /** A special form of patent right granted by a state or jurisdiction to an inventor or the inventor’s assignee for a fixed period of time. The terms and conditions for granting a utility model are slightly different from those for normal patents (including a shorter term of protection and less stringent patentability requirements). The term can also describe what are known in certain countries as “petty patents,” “short-term patents” or “innovation patents.” [Source: https://www.wipo.int/edocs/pubdocs/en/wipo_pub_943_2018.pdf] */
    utility_model = "coar:9DKX-KSAF",
    /** Genomic data refers to the genome and DNA data of an organism. They are used in bioinformatics for collecting, storing and processing the genomes of living things. Genomic data is a more extensive term than sequencing data. However genomic data mostly come from sequencing techniques. It may include non-sequencing data such as data from microarrays, data from real-time PCR panels and data from pharmacogenomics studies. [Source: Adapted from https://www.techopedia.com/definition/31247/genomic-data] */
    genomic_data = "coar:A8F1-NPV9",
    /** Statistics that relate to broad classes, groups, or categories. The data are averaged, totaled, or otherwise derived from individual-level data, and it is no longer possible to distinguish the characteristics of individuals within those classes, groups, or categories. For example, the number and age group of the unemployed in specific geographic regions, or national level statistics on the occurrence of specific offences, originally derived from the statistics of individual police districts. [Source: https://ddialliance.org/Specification/DDI-CV/ModeOfCollection_3.0.html] */
    aggregated_data = "coar:ACF7-8YT9",
    /** Qualitative data (textual, video, audio or still-image) originally produced for other purposes into quantitative data (expressed in unit-by-variable matrices) by using coding techniques in accordance with pre-defined categorization schemes. For example, coded party manifesto data like the "European Parliament Election Study 2009, Manifesto Study" (doi:10.4232/1.10204)". [Source: Adapted from https://ddialliance.org/Specification/DDI-CV/ModeOfCollection_3.0.html] */
    encoded_data = "coar:AM6W-6QAW",
    /** Layout-design (topography) means the three-dimensional disposition, however expressed, of  the elements of an integrated circuit (at least one of which is an active element) and of some or all of the interconnections of an integrated circuit, or such a three-dimensional disposition prepared for  an integrated circuit intended for manufacture [Source: https://www.wipo.int/edocs/lexdocs/laws/en/hk/hk028en.pdf] */
    layout_design = "coar:BW7T-YM2G",
    /** A patent granted to any person who has invented any new and non-obvious ornamental design for an article of manufacture. The design patent protects only the appearance of an article, but not its structural or functional features. [Source: Adapted from https://www.uspto.gov/patents/basics/types-patent-applications/design-patent-application-guide#def] */
    design_patent = "coar:C53B-JCY5",
    /** Data registered by mechanical or electronic means, in a form that allows the information to be retrieved and/or reproduced. For example, images or sounds on disc or magnetic tape. [Source: Adapted from https://ddialliance.org/Specification/DDI-CV/ModeOfCollection_3.0.html] */
    recorded_data = "coar:CQMR-7K63",
    /** A commentary is a more in-depth analysis written to draw attention to a work already published. Commentaries are somewhat like “reviews” in that the author presents his or her analysis of a work and why it  would be of interest to a specific audience. [Source: https://www.enago.com/academy/perspective-opinion-and-commentary-pieces] */
    commentary = "coar:D97F-VB57",
    /** Data resulting from assessing specific properties (or characteristics) of beings, things, phenomena, (and/ or processes) by applying pre-established standards and/or specialized instruments or techniques. [Source: Adapted from  https://ddialliance.org/Specification/DDI-CV/ModeOfCollection_3.0.html] */
    measurement_and_test_data = "coar:DD58-GFSX",
    /** In the context of systematic reviews and meta-analyses, a protocol is a document that presents an explicit plan for a systematic review. The protocol details the rationale and a priori methodological and analytical approach of the review. https://www.bmj.com/content/349/bmj.g7647 */
    knowledge_synthesis_protocol = "coar:DX5J-TA9R",
    /** Data that are used as primary sources to support technical or scientific enquiry, research, scholarship, or artistic activity, and that are used as evidence in the research process and/or are commonly accepted in the research community as necessary to validate research findings and results. [Source: https://casrai.org/term/research-data] */
    research_data = "coar:EHVM-H119",
    /** A work of visual arts and performing arts, including musical works; dramatic works; pantomimes and choreographic works; motion picture and other audiovisual works; pictorial, graphic, sculptural and architectural works. Adapted from Law Insider: https://www.lawinsider.com/dictionary/artistic-works */
    artistic_work = "coar:F8RT-TJK0",
    /** Data resulting from observational research, which involves collecting observations as they occur (for example, observing behaviors, events, development of condition or disease, etc.), without attempting to manipulate any of the independent variables. [Source:  Adapted from https://ddialliance.org/Specification/DDI-CV/ModeOfCollection_3.0.html] */
    observational_data = "coar:FF4C-28RK",
    /** Data collected or assembled from multiple, often heterogeneous sources that have one or more reference points in common, and at least one of the sources was originally produced for other purposes. The data are incorporated in a new entity. For example, providing data on the number of universities in the last 150 years using a variety of available sources (e.g. finance documents, official statistics, university registers), combining survey data with information about geographical areas from official statistics (e.g. population density, doctors per capita, etc.), or using RSS to collect blog posts or tweets, etc. [Source: Adapted from https://ddialliance.org/Specification/DDI-CV/ModeOfCollection_3.0.html] */
    compiled_data = "coar:FXF3-D3G7",
    /** Plant variety protection, also called a "plant breeder's right" (PBR), is a form of intellectual property right granted to the breeder of a new plant variety . According to this right, certain acts concerning the exploitation of the protected variety require the prior authorization of the breeder. Plant variety protection is an independent sui generis form of protection, tailored to protect new plant varieties and has certain features in common with other intellectual property rights. [Source: https://www.wipo.int/edocs/pubdocs/en/wipo_pub_943_2018.pdf] */
    plant_variety_protection = "coar:GPQ7-G5VE",
    /** All types of schemes for organizing information and promoting knowledge management. Knowledge organization systems include classification schemes that organize materials at a general level (such as books on a shelf), subject headings that provide more detailed access, and authority files that control variant versions of key information (such as geographic names and personal names). They also include less-traditional schemes, such as semantic artifacts, semantic networks and ontologies. https://www.clir.org/pubs/reports/pub91/1knowledge/ */
    knowledge_organization_system = "coar:GSZA-Y7V7",
    /** A laboratory notebook (colloq. lab notebook or lab book) is a primary record of research. Researchers use a lab notebook to document their hypotheses, experiments and initial analysis or interpretation of these experiments. This label is used both for traditional and electronic laboratory notebook. [Source: Adapted from https://en.wikipedia.org/wiki/Lab_notebook] */
    laboratory_notebook = "coar:H41Y-FW7B",
    /** A sign used to distinguish the goods or services of one undertaking from those of others. A trademark may consist of words and combinations of words (for instance, names or slogans), logos, figures and images, letters, numbers, sounds, or, in rare instances, smells or moving images, or a combination thereof. [Source: https://www.wipo.int/trademarks/en] */
    trademark = "coar:H6QP-SC1X",
    /** An evaluation of scientific, academic, or professional work by others working in the same field. [Source: Adopted from https://schema.datacite.org/meta/kernel-4.4/doc/DataCite-MetadataKernel_v4.4.pdf] */
    peer_review = "coar:H9BQ-739P",
    /** Industrial designs are applied to a wide variety of industrial products and handicrafts. They refer to the ornamental or aesthetic aspects of a useful article,including compositions of lines or colors or any three-dimensional forms that give a special appearance to a product or handicraft. [Source: https://www.wipo.int/edocs/pubdocs/en/wipo_pub_943_2018.pdf] */
    industrial_design = "coar:JBNF-DYAD",
    /** In order to obtain a patent, a software invention must not fall under other non-patentable subject matter (for example, abstract ideas or mathematical theories) and has to fulfill the other substantive patentability criteria (for example, novelty, inventive step [non-obviousness] and industrial applicability [usefulness]). [Source: https://www.wipo.int/patents/en/faq_patents.html] */
    software_patent = "coar:MW8G-3CR8",
    /** Data resulting from a survey, which is defined as an investigation about the characteristics of a given population by means of collecting data from a sample of that population and estimating their characteristics through the systematic use of statistical methodology. Included are censuses, sample surveys, the collection of data from administrative records and derived statistical activities as well as questionnaires. [Source: Adapted from https://stats.oecd.org/glossary/detail.asp?ID=2620] */
    survey_data = "coar:NHD0-W6SY",
    /** Source code is any collection of code, with or without comments, written using a human-readable programming language, usually as plain text. [Source: https://en.wikipedia.org/wiki/Source_code] */
    source_code = "coar:QH80-2R4E",
    /** A resource type that is not included in existing terms under the top concept "Text". [COAR definition] */
    other_periodical = "coar:QX5C-AR31",
    /** A set of slides containing text, tables or figures, designed to communicate ideas or research results, for projection and viewing by an audience at a conference, symposium, seminar, lecture, workshop or other gatherings. [Source: Adapted from hhttps://sparontologies.github.io/fabio/current/fabio.html#d4e4880] */
    conference_presentation = "coar:R60J-J5BD",
    /** An aggregation of resources, which may encompass collections of one resourceType as well as those of mixed types. A collection is described as a group; its parts may also be separately described. https://datacite-metadata-schema.readthedocs.io/en/4.5/appendices/appendix-1/resourceTypeGeneral/#collection */
    collection = "coar:RMP5-3GQ6",
    /** Physical samples include biological specimens, rock or mineral specimens, soil or sediment cores, plants and seeds, water quality samples, archaeological artefacts, or DNA and human tissue samples. Samples may be used in analyses and can be destroyed in this process, whereas specimens are preserved curated objects that can be continuously studied. Source: 23 Things Physical Samples https://eprints.gla.ac.uk/309016/1/309016.pdf */
    physical_sample = "coar:S7R1-K5P0",
    /** A patent application filed through the WIPO-administered Patent Cooperation Treaty (PCT), also known as an international application. [Source: Adapted from https://www.wipo.int/edocs/pubdocs/en/wipo_pub_943_2018.pdf] */
    PCT_application = "coar:SB3Y-W4EH",
    /** Data resulting from modeling or imitative representation of real-world processes, events, or systems, often using computer programs. For example, a program modeling household consumption responses to indirect tax changes; or a dataset on hypothetical patients and their drug exposure, background conditions, and known adverse events. [Source: Adapted from https://ddialliance.org/Specification/DDI-CV/ModeOfCollection_3.0.html] */
    simulation_data = "coar:W2XT-7017",
    /** A collection of historical records and primary source documents. Documents may be tangible or digital. Adapted from “archive (groupings)” in Getty AAT: https://www.getty.edu/vow/AATFullDisplay?find=maiolica&logic=AND&note=&subjectid=300375748 */
    archival_collection = "coar:YC9F-HGCF",
    /** The protocol is a detailed plan of the research study including a project summary, project description covering the rationale, objectives, methodology, data management and analysis, ethical considerations, gender issues and references. [Source: Adapted from https://www.who.int/publications/i/item/a-practical-guide-for-health-researchers] */
    research_protocol = "coar:YZ1N-ZFT9",
    /** A patent granted to anyone who has invented or discovered and asexually reproduced any distinct and new variety of plant, including cultivated sports, mutants, hybrids, and newly found seedlings, other than a tuber-propagated plant or a plant found in an uncultivated state. [Source: Adapted from https://www.uspto.gov/patents/basics/types-patent-applications/general-information-about-35-usc-161#heading-1] */
    plant_patent = "coar:Z907-YMBB",
    /** A manuscript is a work of any kind (text, inscription, music score, map, etc.) written entirely by hand. [Source: https://products.abc-clio.com/ODLIS/odlis_m.aspx] */
    manuscript = "coar:c_0040",
    /** A journal is a serial publication devoted to disseminating original research and current developments on a subject. (Adapted from ODLIS) [Source: http://dspacecris.eurocris.org/cris/classcerif/classcerif00422] */
    journal = "coar:c_0640",
    /** A brief description of important new research, also known as “communication”. [Source: https://cerif.eurocris.org/vocab/html/OutputTypes.html#Letter] */
    letter = "coar:c_0857",
    /** An annotation in the sense of a legal note is a legally explanatory comment on a decision handed down by a court or arbitral tribunal. [Source: DRIVER info:eu-repo definition] */
    annotation = "coar:c_1162",
    /** Any material representing the whole or part of the earth or any celestial body at any scale. Cartographic materials include two- and three-dimensional maps and plans (including maps of imaginary places); aeronautical, navigational, and celestial charts; atlases; globes; block diagrams; sections; aerial photographs with a cartographic purpose; bird's-eye views (map views), etc. [Source: http://www.loc.gov/marc/cfmap.html] */
    cartographic_material = "coar:c_12cc",
    /** Defined as a representation normally to scale and on a flat medium, of a selection of material or abstract features on, or in relation to, the surface of the earth or of another celestial body. [Source: https://www.loc.gov/marc/bibliographic/bd007a.html] */
    map = "coar:c_12cd",
    /** Media that makes use of images (usually "moving"), with or without sound, over a period of playback time. [Source :https://support.contributors.jstor.org/hc/en-us/articles/11971132444439-JSTOR-Content-and-Resource-Types] */
    video = "coar:c_12ce",
    /** A patent or patent application. */
    patent = "coar:c_15cd",
    /** A resource type that is not included in existing terms. [COAR definition] */
    other = "coar:c_1843",
    /** A policy report presents what is known about a particular issue or problem. It assembles facts and evidence to help readers understand complex issues and form a response. It might aim to be neutral, or it might aim to persuade readers in a particular direction. [Source: https://www.uow.edu.au/student/learning-co-op/assessments/policy-report/#] */
    policy_report = "coar:c_186u",
    /** A resource primarily intended to be heard. Examples include a music playback file format, an audio compact disc, and recorded speech or sounds. [Source: http://dublincore.org/documents/dcmi-terms/#dcmitype-Sound] */
    sound = "coar:c_18cc",
    /** Musical composition can refer to an original piece of music, the structure of a musical piece, or the process of creating a new piece of music. [Source: https://en.wikipedia.org/wiki/Musical_composition ] */
    musical_composition = "coar:c_18cd",
    /** A resource consisting primarily of words for reading. Examples include books, letters, dissertations, poems, newspapers, articles, archives of mailing lists. Note that facsimiles or images of texts are still of the genre Text. [Source: http://purl.org/dc/dcmitype/Text] */
    text = "coar:c_18cf",
    /** A display poster, typically containing text with illustrative figures and/or tables, usually reporting research results or proposing hypotheses, submitted for acceptance to and/or presented at a conference, seminar, symposium, workshop or similar event. Use this label when the poster is not published in a proceeding. [Source: http://purl.org/spar/fabio/ConferencePoster] */
    conference_poster_not_in_proceedings = "coar:c_18co",
    /** A paper, typically the realization of a research paper reporting original research findings. Use this label when the paper is not published in a proceeding. [Source: Adapted from http://purl.org/spar/fabio/ConferencePaper] */
    conference_paper_not_in_proceedings = "coar:c_18cp",
    /** Symbols used to write music, as in a music score, and to express mathematical concepts. [Source: Adapted from https://products.abc-clio.com/ODLIS/odlis_n.aspx] */
    musical_notation = "coar:c_18cw",
    /** A document that describes the process, progress, or results of technical or scientific research or the state of a technical or scientific research problem. It might also include recommendations and conclusions of the research. [Source: http://guides.library.cornell.edu/ecommons/types] */
    technical_report = "coar:c_18gh",
    /** A report to a funding agency is a document written by beneficiaries of project grants. The reporting documents can be e.g. periodic reports about progress of scientific and technical work and final report. For deliverables use ‘Project deliverable’. [Source: http://ec.europa.eu/research/participants/fp7documents/funding-guide/6_projects/reports/reports_en.htm ] */
    report_to_funding_agency = "coar:c_18hj",
    /** A document containing a project report, intended to be delivered to a customer or funding agency describing the results achieved within a specific project. [Source: https://sparontologies.github.io/fabio/current/fabio.html#d4e5183] */
    project_deliverable = "coar:c_18op",
    /** Other types of report may include Business Plans Technical Specifications, data management plans, recommendation reports, white papers, annual reports, auditor's reports, workplace reports, census reports, trip reports, progress reports, investigative reports, budget reports, policy reports, demographic reports, credit reports, appraisal reports, inspection reports, military reports, bound reports, etc. [Source: https://en.wikipedia.org/wiki/Report] */
    other_type_of_report = "coar:c_18wq",
    /** It is publication that reports on the findings of a research project or alternatively scientific observations on or about a subject. [Source: Adapted from https://en.wikipedia.org/wiki/Research_report] */
    research_report = "coar:c_18ws",
    /** An internal report is a record of findings collected for internal use. It is not designed to be made public and may include confidential or proprietary information. */
    internal_report = "coar:c_18ww",
    /** A formal note distributed internally to one or more persons in a company, agency, organization, or institution, with a header indicating the date it was sent and stating to whom it is addressed (To:), from whom it is sent (From:), and the subject of the text (Re:). Unlike a letter, a memo does not require a full salutation or signature at the end of the text--the sender may simply initial his or her name in the header. [Source: https://products.abc-clio.com/ODLIS/odlis_m.aspx#memorandum] */
    memorandum = "coar:c_18wz",
    /** A periodical is a serial publication with its own distinctive title, characterized by a variety of contents and contributors, and issued at regular intervals. (Adapted from ODLIS) [Source: http://www.abc-clio.com/ODLIS/odlis_p.aspx] */
    periodical = "coar:c_2659",
    /** A discussion between a reporter, host, panel, or audience and a newsmaker, author, or celebrity, recorded (edited or unedited) in print, on film or video, as transcript or as a sound recording. (Adapted from ODLIS) */
    interview = "coar:c_26e4",
    /** A popular interest periodical usually containing articles on a variety of topics, written by various authors in a nonscholarly style or a trade publication, unlike a consumer publication, covers a specific topic for people who work in that particular field or industry. [Source: Adapted from https://www.thebalance.com/what-is-a-trade-publication-exactly-2316039 and http://www.abc-clio.com/ODLIS/odlis_m.aspx] */
    magazine = "coar:c_2cd9",
    /** A research article is a primary source, that is, it reports the methods and results of an original study performed by the authors. (adapted from http://apus.libanswers.com/faq/2324) */
    research_article = "coar:c_2df8fbb1",
    /** A non-serial publication that is complete in one volume or a designated finite number of volumes. [Source: Adapted from http://purl.org/eprint/type/Book] */
    book = "coar:c_2f33",
    /** A non-peer reviewed periodical, usually published daily or weekly, consisting primarily of editorials and news items concerning current or recent events and matters of public interest. [Source: https://sparontologies.github.io/fabio/current/fabio.html#d4e4291] */
    newspaper = "coar:c_2fe3",
    /** A defined chapter or section of a book, usually with a separate title or number. [Source: http://purl.org/spar/fabio/BookChapter] */
    book_part = "coar:c_3248",
    /** A recorded sequence of connected steps, which may be automated, specifying a reliably repeatable sequence of operations to be undertaken when conducting a particular job, for example an in silico investigation that extracts and processes information from a number of bioinformatics databases. [Source: Adapted from https://sparontologies.github.io/fabio/current/fabio.html#d4e6123] */
    workflow = "coar:c_393c",
    /** A contribution to a journal denotes a work published in a journal. If applicable sub-terms should be chosen. */
    contribution_to_journal = "coar:c_3e5a",
    /** A book authored by a student containing a formal presentations of research outputs submitted for examination in completion of a course of study at an institution of higher education, to fulfil the requirements for an academic degree. Also known as a dissertation. [Source: https://sparontologies.github.io/fabio/current/fabio.html#d4e5748] */
    thesis = "coar:c_46ec",
    /** A letter addressed to the editor and comments on or discussed an item previously published by that periodical, or of interest to its readership. [Source: Adapted from hhttps://sparontologies.github.io/fabio/current/fabio.html#d4e3803] */
    letter_to_the_editor = "coar:c_545b",
    /** A paper, published within a conference proceeding, typically the realization of a research paper reporting original research findings. [Source: Adapted from https://sparontologies.github.io/fabio/current/fabio.html#d4e2635] */
    conference_paper = "coar:c_5794",
    /** A computer program in source code (text) or compiled form. [Source: http://purl.org/dc/dcmitype/Software] */
    software = "coar:c_5ce6",
    /** An article, typically the realization of a research paper reporting original research findings, published in a journal issue. [Source: https://sparontologies.github.io/fabio/current/fabio.html#d4e3646] */
    journal_article = "coar:c_6501",
    /** A display poster, published within a conference proceeding, typically containing text with illustrative figures and/or tables, usually reporting research results or proposing hypotheses, submitted for acceptance to and/or presented at a conference, seminar, symposium, workshop or similar event. [Source: Adapted https://sparontologies.github.io/fabio/current/fabio.html#d4e2648] */
    conference_poster = "coar:c_6670",
    /** A piece of writing or other item of content published on a blog. [Source: https://www.lexico.com/definition/blog_post] */
    blog_post = "coar:c_6947",
    /** Technical documentation refers to any type of documentation that describes handling, functionality and architecture of a technical product or a product under development or use. [Source: https://en.wikipedia.org/wiki/Technical_documentation] */
    technical_documentation = "coar:c_71bd",
    /** A work that reports on the results of a research study to evaluate interventions or exposures on biomedical or health-related outcomes. The two main types of clinical studies are interventional studies (clinical trials) and observational studies. While most clinical studies concern humans, this publication type may be used for clinical veterinary articles meeting the requisites for humans. [Source: https://www.ncbi.nlm.nih.gov/mesh/2009830] */
    clinical_study = "coar:c_7877",
    /** A thesis reporting a research project undertaken as part of an undergraduate course of education leading to a bachelor's degree. [Source: https://sparontologies.github.io/fabio/current/fabio.html#d4e2181] */
    bachelor_thesis = "coar:c_7a1f",
    /** A formal correction to an error introduced by the author into a previously published document. (adapted from https://sparontologies.github.io/fabio/current/fabio.html#d4e2712) */
    corrigendum = "coar:c_7acd",
    /** A collection of related web pages containing text, images, videos and/or other digital assets that are addressed relative to a common Uniform Resource Locator (URL). A web site is hosted on at least one web server, accessible via a network such as the Internet or a private local area network. [Source: http://purl.org/spar/fabio/WebSite] */
    website = "coar:c_7ad9",
    /** A software paper should include the rationale for the development of the tool and details of the code used for its construction. [Source: Adapted from https://f1000research.com/for-authors/article-guidelines/software-tool-articles ] */
    software_paper = "coar:c_7bab",
    /** A working or discussion paper circulated publicly or among a group of peers. Certain disciplines, for example economics, issue working papers in series. [Source: http://www.ukoln.ac.uk/repositories/digirep/index/Eprints_Type_Vocabulary_Encoding_Scheme#:~:text=http%3A//purl.org/eprint/type/WorkingPaper] */
    working_paper = "coar:c_8042",
    /** A preprint is a scientific manuscript without peer-review and has not yet been accepted by a journal, typicaly submitted to a public server/ repository by the author. [Source: Adapted from https://asapbio.org/preprint-info/preprint-faq#qaef-637] */
    preprint = "coar:c_816b",
    /** Transcription of an oral presentation/talk intended to present information or teach people about a particular subject, for example by a university or college teacher. [Source: Adopted from https://en.wikipedia.org/wiki/Lecture] */
    lecture = "coar:c_8544",
    /** A list of the books and articles that have been used by someone when writing a particular book or article [Source: https://dictionary.cambridge.org/dictionary/english/bibliography] */
    bibliography = "coar:c_86bc",
    /** A moving display, either generated dynamically by a computer program or formed from a series of pre-recorded still images imparting an impression of motion when shown in succession. [Source: http://purl.org/spar/fabio/MovingImage] */
    moving_image = "coar:c_8a7e",
    /** A report is a separately published record of research findings, research still in progress, policy developments and events, or other technical findings, usually bearing a report number and sometimes a grant number assigned by the funding agency. Also, an official record of the activities of a committee or corporate entity, the proceedings of a government body, or an investigation by an agency, whether published or private, usually archived or submitted to a higher authority, voluntarily or under mandate. In a more general sense, any formal account of facts or information related to a specific event or phenomenon, sometimes given at regular intervals. [Source: http://lu.com/odlis/odlis_R.cfm#report ] */
    report = "coar:c_93fc",
    /** Work consisting of a news item appearing in a general-interest newspaper or other general news periodical, containing information of current and timely interest in a field. (Adapted from http://www.reference.md/files/D018/mD018431.html ) */
    newspaper_article = "coar:c_998f",
    /** A formal statement describing how research data will be managed and documented throughout a research project and the terms regarding the subsequent deposit of the data with a data repository for long-term management and preservation. [Source: https://casrai.org/rdm-glossary] */
    data_management_plan = "coar:c_ab20",
    /** A brief essay expressing the opinion or position of the chief editor(s) of a (academic) journal with respect to a current political, social, cultural, or professional issue. [Source: Adapted from ODLIS [Source: http://www.abc-clio.com/ODLIS/odlis_e.aspx ] */
    editorial = "coar:c_b239",
    /** A written review and critical analysis of the content, scope and quality of a book or other monographic work. [Source: https://sparontologies.github.io/fabio/current/fabio.html#d4e2300] */
    book_review = "coar:c_ba08",
    /** part of a report */
    report_part = "coar:c_ba1f",
    /** A research proposal is a document proposing a research project, generally in the sciences or academia, and generally constitutes a request for sponsorship of that research. [Source: https://en.wikipedia.org/wiki/Research_proposal] */
    research_proposal = "coar:c_baaf",
    /** A thesis reporting a research project undertaken as part of a graduate course of education leading to a master's degree. [Source: https://sparontologies.github.io/fabio/current/fabio.html#d4e4057] */
    master_thesis = "coar:c_bdcc",
    /** A data paper is a scholarly publication describing a particular dataset or group of dataset, published in the form of a peer-reviewed article in a scholarly journal. The main purpose of a data paper is to describe data, the circumstances of their collection, and information related to data features, access and potential reuse. Adapted from https://en.wikipedia.org/wiki/Data_paper and http://www.gbif.org/publishing-data/data-papers */
    data_paper = "coar:c_beb9",
    /** A visual representation other than text, including all types of moving image and still image. [Source: Adapted from  http://purl.org/dc/dcmitype/Image] */
    image = "coar:c_c513",
    /** All kind of digital resources contributed to a conference, like conference presentation (slides), conference report, conference lecture, abstracts, demonstrations. For conference papers, posters or proceedings the specific sub-concepts should be used. [COAR definition] */
    conference_output = "coar:c_c94f",
    /** Software that is used to generate, process or analyse results that you intend to appear in a publication (either in a journal, conference paper, monograph, book or thesis). Research software can be anything from a few lines of code written by yourself, to a professionally developed software package. [Source: https://datashare.ed.ac.uk/handle/10283/785] */
    research_software = "coar:c_c950",
    /** Data resulting from a research study in which one or more human subjects are prospectively assigned to one or more interventions (which may include placebo or other control) to evaluate the effects of those interventions on health-related biomedical or behavioral outcomes. [Source: Adapted from https://grants.nih.gov/policy/clinical-trials/definition.htm] */
    clinical_trial_data = "coar:c_cb28",
    /** A thesis reporting the research undertaken during a period of graduate study leading to a doctoral degree. [Source: https://sparontologies.github.io/fabio/current/fabio.html#d4e3051] */
    doctoral_thesis = "coar:c_db06",
    /** A review article is a secondary source, that is, it is written about other articles, and does not report original research of its own. [Source: Adapted from http://apus.libanswers.com/faq/2324] */
    review_article = "coar:c_dcae04bc",
    /** A collection of related facts and data encoded in a defined structure. [Source: Adapted from http://purl.org/spar/fabio/Dataset] */
    dataset = "coar:c_ddb1",
    /** A digital resource that can be reused to enhance teaching and learning. Source https://icas-ca.org/archive/projects/coerc/oer-glossary/ */
    learning_object = "coar:c_e059",
    /** A resource requiring interaction from the user to be understood, executed, or experienced. Examples include forms on Web pages, applets, multimedia learning objects, chat services, or virtual reality environments. Source: http://purl.org/dc/dcmitype/InteractiveResource */
    interactive_resource = "coar:c_e9a0",
    /** A recorded static visual representation. This class of image includes diagrams, drawings, graphs, graphic designs, plans, photographs and prints. [Source: Adapted from  http://purl.org/spar/fabio/StillImage] */
    still_image = "coar:c_ecc8",
    /** A review of others' published work. [Source: Adapted from https://sparontologies.github.io/fabio/current/fabio.html#d4e5273] */
    review = "coar:c_efa0",
    /** Conference proceedings is the official record of a conference meeting. It is a collection of documents which corresponds to the presentations given at the conference. It may include additional content. [Source: http://www.ieee.org/documents/confprocdefined.pdf ] */
    conference_proceedings = "coar:c_f744",
};
/**
* Kinds of organization. Canonical discriminator for Organization; pick the value matching the organization's PRIMARY nature.
*/
export enum OrganizationTypeEnum {
    
    /** A degree-granting university or college. */
    ACADEMIC_INSTITUTION = "ACADEMIC_INSTITUTION",
    /** A gallery, library, archive or museum. */
    GLAM_INSTITUTION = "GLAM_INSTITUTION",
    /** A research center or institute, whether independent or within a university (if within one, also set parent_organization). */
    RESEARCH_CENTER = "RESEARCH_CENTER",
    /** A body whose primary role is funding research. */
    FUNDER = "FUNDER",
    /** A commercial company. */
    COMPANY = "COMPANY",
    /** A non-profit organization / NGO. */
    NON_PROFIT = "NON_PROFIT",
};
/**
* A person's role in a project. Where a CRediT (Contributor Roles Taxonomy) concept approximates the role, `meaning:` records it.
*/
export enum ProjectRoleEnum {
    
    /** The formally designated lead researcher (PI). */
    PRINCIPAL_INVESTIGATOR = "PRINCIPAL_INVESTIGATOR",
    /** A formally designated co-principal investigator. */
    CO_PI = "CO_PI",
    /** A team member conducting the scholarly research. */
    RESEARCHER = "RESEARCHER",
    /** A team member building the project's software. */
    DEVELOPER = "DEVELOPER",
    /** An enrolled student (BA/MA/PhD) working on the project in any capacity — student status takes precedence over task. */
    STUDENT = "STUDENT",
    /** An external mentor or advisory-board member. */
    ADVISOR = "ADVISOR",
    /** Fallback for any other named involvement. */
    CONTRIBUTOR = "CONTRIBUTOR",
};
/**
* A person's position within an organization (job/status).
*/
export enum PersonOrgRoleEnum {
    
    /** Faculty member of any professorial rank. */
    PROFESSOR = "PROFESSOR",
    /** Research associate / postdoc. */
    ASSOCIATE = "ASSOCIATE",
    /** Formal member of a center, lab or society. */
    MEMBER = "MEMBER",
    /** Administrative or lab manager. */
    MANAGER = "MANAGER",
    /** Formal association without employment. */
    AFFILIATE = "AFFILIATE",
    /** Staff fallback when no finer value fits. */
    EMPLOYEE = "EMPLOYEE",
};
/**
* An organization's role in a project (one instance per role).
*/
export enum OrgProjectRoleEnum {
    
    /** Leads/coordinates the project or consortium. */
    COORDINATOR = "COORDINATOR",
    /** Contributes work as a consortium member. */
    PARTNER = "PARTNER",
    /** Provides funding for the project. */
    FUNDER = "FUNDER",
    /** Provides the institutional/administrative home. */
    HOST = "HOST",
};
/**
* The kind of contribution to a publication.
*/
export enum AuthorshipRoleEnum {
    
    /** Byline author (the default). */
    AUTHOR = "AUTHOR",
    /** Editor of a volume or collection. */
    EDITOR = "EDITOR",
    /** Translator of the work. */
    TRANSLATOR = "TRANSLATOR",
    /** Named non-byline contribution. */
    CONTRIBUTOR = "CONTRIBUTOR",
};
/**
* Kinds of scholarly events.
*/
export enum EventTypeEnum {
    
    /** A multi-session academic conference. */
    CONFERENCE = "CONFERENCE",
    /** A hands-on or small-group working meeting. */
    WORKSHOP = "WORKSHOP",
    /** A recurring or one-off academic seminar session. */
    SEMINAR = "SEMINAR",
    /** A single public or academic talk. */
    LECTURE = "LECTURE",
    /** A time-boxed collaborative building event. */
    HACKATHON = "HACKATHON",
    /** A curated public display (physical or digital). */
    EXHIBITION = "EXHIBITION",
};
/**
* Delivery forms for tools and kinds of services. Tool records use the software values; Service records use the service values.
*/
export enum ToolServiceTypeEnum {
    
    /** Software used through a browser. */
    WEB_APPLICATION = "WEB_APPLICATION",
    /** Software installed on a user's machine. */
    DESKTOP_APPLICATION = "DESKTOP_APPLICATION",
    /** A code library/package imported by other software. */
    LIBRARY = "LIBRARY",
    /** Software operated from a terminal. */
    COMMAND_LINE_TOOL = "COMMAND_LINE_TOOL",
    /** A queryable data system offered as a tool. */
    DATABASE = "DATABASE",
    /** A programmatic service accessed over the network. */
    API_SERVICE = "API_SERVICE",
    /** Human-mediated digitization (scanning, imaging, OCR). */
    DIGITIZATION_SERVICE = "DIGITIZATION_SERVICE",
    /** Human-mediated expertise (methods, data, tech advice). */
    CONSULTING_SERVICE = "CONSULTING_SERVICE",
};
/**
* Common licenses for tools and datasets. `meaning:` records the canonical URI (SPDX for software licenses, creativecommons.org for CC). Extend as needed; keep meanings canonical.
*/
export enum LicenseEnum {
    
    /** Creative Commons Attribution 4.0. */
    CC_BY_4_0 = "CC_BY_4_0",
    /** Creative Commons Attribution-ShareAlike 4.0. */
    CC_BY_SA_4_0 = "CC_BY_SA_4_0",
    /** Creative Commons Zero (public domain dedication). */
    CC0_1_0 = "CC0_1_0",
    /** MIT License. */
    MIT = "MIT",
    /** Apache License 2.0. */
    APACHE_2_0 = "APACHE_2_0",
    /** GNU GPL v3.0 (or later). */
    GPL_3_0 = "GPL_3_0",
};


/**
 * Root class for any identifiable IDHI entity. Provides the IDHI URN id, multilingual name/description, homepage and alternate identifiers. Never instantiated directly; every concrete entity inherits from it and constrains the id's class token via slot_usage.
 */
export interface NamedThing {
    /** The entity's primary identifier: an IDHI URN of the form
  idhi:<class name>:<random short alphanumeric id>
e.g. idhi:person:x7k2m9 or idhi:project:a83bq1. Minted by IDHI at record creation and never reused or changed. The class token is the lowercase snake_case class name (Organization subclasses use "organization"); each concrete class enforces its own token via slot_usage. External identifiers (ORCID, ROR, DOI...) are supplementary and go in their dedicated slots — never here. */
    id: string,
    /** Multilingual name/title. Provide at least one language; English, Hebrew and Arabic variants are each a separate LangString. Preferably a sortable name (e.g. "Smith, John" rather than "John Smith") for people and organizations; for projects, tools and services, use the name the team itself uses. */
    name?: LangString[],
    /** Multilingual free-text description (a few sentences aimed at index visitors, not internal notes). */
    description?: LangString[],
    /** Public landing page of the entity, if one exists. */
    homepage?: string,
    /** Additional EXTERNAL identifiers beyond the primary IDHI URN and the dedicated ORCID/ROR/DOI slots, as CURIEs/URIs (e.g. Wikidata QIDs, VIAF, ISNI). */
    identifiers?: string[],
    /** URIs of records in OTHER systems describing the same real-world entity (Wikidata, PeriodO, GeoNames...). Use for linked-data alignment, not for the entity's own pages (use homepage). */
    same_as?: string[],
}


export function isNamedThing(o: object): o is NamedThing {
    return (
        'id' in o
    )
}

export function toNamedThing(o: NamedThing): NamedThing {
    return {
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A single language-tagged text value. Instances are combined in a multivalued slot to give English/Hebrew/Arabic variants of one field. Follows the LinkML community rdf:langString convention. Use one LangString per language; do not repeat a language within the same field.
 */
export interface LangString {
    /** BCP-47 language tag of the value (en, he or ar). */
    language: string,
    /** The text itself, in the language given by 'language'. */
    value: string,
}


export function isLangString(o: object): o is LangString {
    return (
        'language' in o &&
        'value' in o
    )
}

export function toLangString(o: LangString): LangString {
    return {
        language: o.language ?? null,
        value: o.value ?? ''
    }
}

/**
 * A person or organization (a FOAF Agent). Abstract; use Person or Organization.
 */
export interface Agent extends NamedThing {
}


export function isAgent(o: object): o is Agent {
    return (
        'id' in o
    )
}

export function toAgent(o: Agent): Agent {
    return {
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A human agent in the DH index: researcher, developer, librarian, student, etc. Create a Person record once per human being and reference it everywhere by id; do not duplicate people per project.
 */
export interface Person extends Agent {
    /** Given (first) name, in the person's preferred romanization. Explicitly optional — the authoritative multilingual display name lives in 'name'. */
    given_name?: string,
    /** Family (last) name, in the person's preferred romanization. Explicitly optional — the authoritative multilingual display name lives in 'name'. */
    family_name?: string,
    /** The person's ORCID iD, as CURIE (ORCID:0000-0002-1825-0097) or full URL. A supplementary external identifier — the record's primary id is always the IDHI URN. Strongly recommended for every researcher; enables deduplication and linking to the scholarly record. */
    orcid?: string,
    /** Contact email addresses (zero or more). Only record addresses the person has agreed to publish in the index. */
    emails?: string[],
    /** The person's institutional affiliations, as reified Affiliation objects (organization + position + dates). Use for employment or formal membership, NOT for project involvement — that goes in project_participations. */
    affiliations?: Affiliation[],
    /** The person's project involvements, as reified ProjectParticipation objects carrying the role (PI, developer...) and dates. */
    project_participations?: ProjectParticipation[],
    /** The person's publication contributions, as reified Authorship objects carrying byline order and role. */
    authorships?: Authorship[],
}


export function isPerson(o: object): o is Person {
    return (
        'id' in o
    )
}

export function toPerson(o: Person): Person {
    return {
        given_name: o.given_name ?? '',
        family_name: o.family_name ?? '',
        orcid: o.orcid ?? null,
        emails: o.emails ?? [],
        affiliations: o.affiliations ?? [],
        project_participations: o.project_participations ?? [],
        authorships: o.authorships ?? [],
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * An organization of any kind. Its kind (academic institution, GLAM, research center, funder, company, non-profit) is given by organization_type, which is the canonical machine-readable discriminator. Use the subclasses below only as optional sugar when a single, unambiguous type applies. All organizations — including instances of the subclasses — use the idhi:organization:<shortid> URN form.
 */
export interface Organization extends Agent {
    /** The organization's ROR ID, as CURIE (ROR:04aj4c181) or full URL. A supplementary external identifier — the record's primary id is always the IDHI URN. Record it whenever the organization is registered in ROR — most universities and research institutes are. */
    ror?: string,
    /** The kind of organization. This enum value — not the optional subclasses — is the canonical discriminator; always set it. */
    organization_type?: string,
    /** The larger organization this one is part of (e.g. a department's university). Use for formal containment only; looser partnerships belong in relationship classes. */
    parent_organization?: OrganizationId,
    /** Where the organization, facility or event is physically situated. */
    location?: LocationId,
    /** Further relevant web pages beyond the homepage (blog, social-media profile, registry entry, press coverage...). For records describing the same entity in other systems use same_as instead. */
    additional_urls?: string[],
    /** A published contact address for the entity (office, team or service-desk mailbox). For a person's own addresses use 'emails'. */
    contact_email?: string,
}


export function isOrganization(o: object): o is Organization {
    return (
        'id' in o
    )
}

export function toOrganization(o: Organization): Organization {
    return {
        ror: o.ror ?? null,
        organization_type: o.organization_type ?? null,
        parent_organization: o.parent_organization ?? null,
        location: o.location ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A university or college.
 */
export interface AcademicInstitution extends Organization {
}


export function isAcademicInstitution(o: object): o is AcademicInstitution {
    return (
        'id' in o
    )
}

export function toAcademicInstitution(o: AcademicInstitution): AcademicInstitution {
    return {
        ror: o.ror ?? null,
        organization_type: o.organization_type ?? null,
        parent_organization: o.parent_organization ?? null,
        location: o.location ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A gallery, library, archive or museum.
 */
export interface GLAMInstitution extends Organization {
}


export function isGLAMInstitution(o: object): o is GLAMInstitution {
    return (
        'id' in o
    )
}

export function toGLAMInstitution(o: GLAMInstitution): GLAMInstitution {
    return {
        ror: o.ror ?? null,
        organization_type: o.organization_type ?? null,
        parent_organization: o.parent_organization ?? null,
        location: o.location ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A research center or institute.
 */
export interface ResearchCenter extends Organization {
}


export function isResearchCenter(o: object): o is ResearchCenter {
    return (
        'id' in o
    )
}

export function toResearchCenter(o: ResearchCenter): ResearchCenter {
    return {
        ror: o.ror ?? null,
        organization_type: o.organization_type ?? null,
        parent_organization: o.parent_organization ?? null,
        location: o.location ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A funding body (foundation, council, government program).
 */
export interface Funder extends Organization {
}


export function isFunder(o: object): o is Funder {
    return (
        'id' in o
    )
}

export function toFunder(o: Funder): Funder {
    return {
        ror: o.ror ?? null,
        organization_type: o.organization_type ?? null,
        parent_organization: o.parent_organization ?? null,
        location: o.location ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A commercial company.
 */
export interface Company extends Organization {
}


export function isCompany(o: object): o is Company {
    return (
        'id' in o
    )
}

export function toCompany(o: Company): Company {
    return {
        ror: o.ror ?? null,
        organization_type: o.organization_type ?? null,
        parent_organization: o.parent_organization ?? null,
        location: o.location ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A non-profit / NGO.
 */
export interface NonProfit extends Organization {
}


export function isNonProfit(o: object): o is NonProfit {
    return (
        'id' in o
    )
}

export function toNonProfit(o: NonProfit): NonProfit {
    return {
        ror: o.ror ?? null,
        organization_type: o.organization_type ?? null,
        parent_organization: o.parent_organization ?? null,
        location: o.location ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A physical or virtual facility such as a DH lab, digitization studio or research infrastructure, affiliated with one or more organizations (CERIF Facility). Use Facility when the unit offers services/tools and has its own identity distinct from its host organization; otherwise just use the Organization.
 */
export interface Facility extends NamedThing {
    /** The organization(s) hosting or owning this facility, as reified FacilityAffiliation objects with dates. */
    facility_affiliations?: FacilityAffiliation[],
    /** Where the organization, facility or event is physically situated. */
    location?: LocationId,
    /** Services this facility offers to researchers. Reference Service records by id; the Service's own 'provider' may still point at the parent Organization. */
    services_offered?: ServiceId[],
    /** Tools this facility maintains or gives access to (by id). Use for hosted instances and lab-maintained software, not for every tool staff members happen to use. */
    tools_provided?: ToolId[],
    /** Further relevant web pages beyond the homepage (blog, social-media profile, registry entry, press coverage...). For records describing the same entity in other systems use same_as instead. */
    additional_urls?: string[],
    /** A published contact address for the entity (office, team or service-desk mailbox). For a person's own addresses use 'emails'. */
    contact_email?: string,
}


export function isFacility(o: object): o is Facility {
    return (
        'id' in o
    )
}

export function toFacility(o: Facility): Facility {
    return {
        facility_affiliations: o.facility_affiliations ?? [],
        location: o.location ?? null,
        services_offered: o.services_offered ?? [],
        tools_provided: o.tools_provided ?? [],
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A Digital Humanities research project, classified by TaDiRAH research activities and by research discipline. This is the central entity of the index; people, organizations, outputs and studied periods/places all hang off it.
 */
export interface Project extends NamedThing {
    /** Digital-humanities research activities practiced in this project, tool or service, as TaDiRAH 2.0 concepts. Prefer the most specific applicable concept (e.g. tadirah:topicModeling rather than tadirah:analyzing); multiple values are expected. This is the primary DH-facet for discovery. */
    digital_humanities_activities?: string,
    /** Humanities discipline(s) of the project (history, linguistics, archaeology...). Free multilingual text for now; a controlled SKOS scheme is a planned upgrade. */
    research_disciplines?: LangString[],
    /** The project's OWN runtime (when the research is/was conducted). Do not confuse with studied_periods. */
    project_period?: TimePeriodId,
    /** Historical period(s) the project studies (e.g. Ottoman period), as TimePeriod records — distinct from project_period. */
    studied_periods?: TimePeriodId[],
    /** Geographic focus of the research (places studied), as Location records — distinct from where the project team sits. */
    studied_places?: LocationId[],
    /** The person's project involvements, as reified ProjectParticipation objects carrying the role (PI, developer...) and dates. */
    project_participations?: ProjectParticipation[],
    /** Organizations engaged in the project, as reified OrganizationProjectRole objects (coordinator, partner, funder, host). */
    organization_roles?: OrganizationProjectRole[],
    /** Tools produced by this project (by id). */
    outputs_tools?: ToolId[],
    /** Datasets produced or curated by this project (by id). */
    outputs_datasets?: DatasetId[],
    /** Publications resulting from this project (by id). */
    outputs_publications?: PublicationId[],
    /** Total awarded funding, if public, in ILS unless noted in the project description. Omit rather than guess. */
    funding_amount?: number,
    /** Further relevant web pages beyond the homepage (blog, social-media profile, registry entry, press coverage...). For records describing the same entity in other systems use same_as instead. */
    additional_urls?: string[],
    /** A published contact address for the entity (office, team or service-desk mailbox). For a person's own addresses use 'emails'. */
    contact_email?: string,
}


export function isProject(o: object): o is Project {
    return (
        'id' in o
    )
}

export function toProject(o: Project): Project {
    return {
        digital_humanities_activities: o.digital_humanities_activities ?? null,
        research_disciplines: o.research_disciplines ?? [],
        project_period: o.project_period ?? null,
        studied_periods: o.studied_periods ?? [],
        studied_places: o.studied_places ?? [],
        project_participations: o.project_participations ?? [],
        organization_roles: o.organization_roles ?? [],
        outputs_tools: o.outputs_tools ?? [],
        outputs_datasets: o.outputs_datasets ?? [],
        outputs_publications: o.outputs_publications ?? [],
        funding_amount: o.funding_amount ?? 0.0,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A reusable software tool, typically produced by a project (schema:SoftwareApplication). Use Tool for software that others can install, run or call; for a human-mediated offering use Service instead.
 */
export interface Tool extends NamedThing {
    /** The delivery form of the tool (web app, library, CLI...). Pick the single value describing how users primarily consume it. */
    tool_type?: string,
    /** Source-code repository URL (GitHub, GitLab...), if open. */
    code_repository?: string,
    /** Main implementation language(s), comma-free single value preferred. */
    programming_language?: string,
    /** The license under which the tool or dataset is released. Required for anything advertised as reusable; omit only if genuinely unknown. */
    license?: string,
    /** User or developer documentation for the tool or service (manual, wiki, API reference). */
    documentation_url?: string,
    /** Further relevant web pages beyond the homepage (blog, social-media profile, registry entry, press coverage...). For records describing the same entity in other systems use same_as instead. */
    additional_urls?: string[],
    /** A published contact address for the entity (office, team or service-desk mailbox). For a person's own addresses use 'emails'. */
    contact_email?: string,
    /** Digital-humanities research activities practiced in this project, tool or service, as TaDiRAH 2.0 concepts. Prefer the most specific applicable concept (e.g. tadirah:topicModeling rather than tadirah:analyzing); multiple values are expected. This is the primary DH-facet for discovery. */
    digital_humanities_activities?: string,
}


export function isTool(o: object): o is Tool {
    return (
        'id' in o
    )
}

export function toTool(o: Tool): Tool {
    return {
        tool_type: o.tool_type ?? null,
        code_repository: o.code_repository ?? null,
        programming_language: o.programming_language ?? '',
        license: o.license ?? null,
        documentation_url: o.documentation_url ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        digital_humanities_activities: o.digital_humanities_activities ?? null,
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A reusable, human- or organization-mediated service offered by a facility or organization (e.g., digitization on demand, OCR consulting, data curation support). Use Service when the offering requires the provider to act; use Tool for self-service software.
 */
export interface Service extends NamedThing {
    /** The kind of service offered (digitization, consulting...). */
    service_type?: string,
    /** The organization formally responsible for delivering the service (the one you'd contact or contract with) — set this even when the service is listed under a Facility. */
    provider?: OrganizationId,
    /** User or developer documentation for the tool or service (manual, wiki, API reference). */
    documentation_url?: string,
    /** Further relevant web pages beyond the homepage (blog, social-media profile, registry entry, press coverage...). For records describing the same entity in other systems use same_as instead. */
    additional_urls?: string[],
    /** A published contact address for the entity (office, team or service-desk mailbox). For a person's own addresses use 'emails'. */
    contact_email?: string,
    /** Digital-humanities research activities practiced in this project, tool or service, as TaDiRAH 2.0 concepts. Prefer the most specific applicable concept (e.g. tadirah:topicModeling rather than tadirah:analyzing); multiple values are expected. This is the primary DH-facet for discovery. */
    digital_humanities_activities?: string,
}


export function isService(o: object): o is Service {
    return (
        'id' in o
    )
}

export function toService(o: Service): Service {
    return {
        service_type: o.service_type ?? null,
        provider: o.provider ?? null,
        documentation_url: o.documentation_url ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        digital_humanities_activities: o.digital_humanities_activities ?? null,
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * An academic publication (BIBO document): journal article, book, chapter, conference paper, thesis, report, etc. The precise kind is given by publication_type (COAR resource type).
 */
export interface Publication extends NamedThing {
    /** The publication's DOI, as CURIE (DOI:10.1234/abcd) or full URL. A supplementary external identifier — the record's primary id is always the IDHI URN. Record whenever one exists; it is the preferred dedup key. */
    doi?: string,
    /** The kind of publication, as a COAR resource-type concept (journal article, book part, conference paper, thesis...). Pick the most specific applicable concept. */
    publication_type?: string,
    /** The person's publication contributions, as reified Authorship objects carrying byline order and role. */
    authorships?: Authorship[],
    /** Formal publication date (or year-01-01 if only the year is known). */
    date_issued?: date,
    /** Name of the journal, book or proceedings the publication appeared in, as free multilingual text. If the container work has its own IDHI record or external URI, also link it via part_of. */
    published_in?: LangString[],
    /** The organization publishing the catalog, dataset or publication (by IDHI URN). */
    publisher?: OrganizationId,
    /** The containing work (book for a chapter, proceedings for a paper), by IDHI URN or external URI. */
    part_of?: string,
    /** Event(s) in the index where this publication was presented (by IDHI URN), e.g. the conference where the paper was given. Distinct from published_in, the container it appeared in. */
    presented_at?: EventId[],
}


export function isPublication(o: object): o is Publication {
    return (
        'id' in o
    )
}

export function toPublication(o: Publication): Publication {
    return {
        doi: o.doi ?? null,
        publication_type: o.publication_type ?? null,
        authorships: o.authorships ?? [],
        date_issued: o.date_issued ?? new Date(),
        published_in: o.published_in ?? [],
        publisher: o.publisher ?? null,
        part_of: o.part_of ?? null,
        presented_at: o.presented_at ?? [],
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A scholarly event: conference, workshop, seminar, lecture, hackathon or exhibition. Use Event for time-bounded gatherings; recurring series should be modeled as one Event per occurrence.
 */
export interface Event extends NamedThing {
    /** The kind of scholarly event. */
    event_type?: string,
    /** Start of the event or of a relationship's validity (e.g. when a person joined a project or organization). */
    start_date?: date,
    /** End of the event, relationship or time period. Omit for ongoing relationships and open-ended periods. */
    end_date?: date,
    /** Where the organization, facility or event is physically situated. */
    location?: LocationId,
    /** Further relevant web pages beyond the homepage (blog, social-media profile, registry entry, press coverage...). For records describing the same entity in other systems use same_as instead. */
    additional_urls?: string[],
    /** A published contact address for the entity (office, team or service-desk mailbox). For a person's own addresses use 'emails'. */
    contact_email?: string,
}


export function isEvent(o: object): o is Event {
    return (
        'id' in o
    )
}

export function toEvent(o: Event): Event {
    return {
        event_type: o.event_type ?? null,
        start_date: o.start_date ?? new Date(),
        end_date: o.end_date ?? new Date(),
        location: o.location ?? null,
        additional_urls: o.additional_urls ?? [],
        contact_email: o.contact_email ?? '',
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A place, optionally with geographic coordinates. Used both for where things ARE (org/facility/event location) and for places STUDIED by a project (studied_places).
 */
export interface Location extends NamedThing {
    /** WGS84 latitude in decimal degrees. */
    latitude?: number,
    /** WGS84 longitude in decimal degrees. */
    longitude?: number,
    /** Postal address, multilingual. */
    address?: LangString[],
}


export function isLocation(o: object): o is Location {
    return (
        'id' in o
    )
}

export function toLocation(o: Location): Location {
    return {
        latitude: o.latitude ?? 0.0,
        longitude: o.longitude ?? 0.0,
        address: o.address ?? [],
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A time span (EDM TimeSpan). Deliberately reused for two purposes: a project's runtime (project_period) and historical periods studied by a project (studied_periods), e.g. "Second Temple period". For historical periods, prefer linking same_as to a PeriodO or Wikidata URI.
 */
export interface TimePeriod extends NamedThing {
    /** Start of the time span. A string (not date) on purpose: historical periods need values like "-0100" or "circa 1500". Prefer ISO 8601 / EDTF where possible. */
    begin_date?: string,
    /** End of the event, relationship or time period. Omit for ongoing relationships and open-ended periods. */
    end_date?: date,
}


export function isTimePeriod(o: object): o is TimePeriod {
    return (
        'id' in o
    )
}

export function toTimePeriod(o: TimePeriod): TimePeriod {
    return {
        begin_date: o.begin_date ?? '',
        end_date: o.end_date ?? new Date(),
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A digital archive / catalog of resources (DCAT Catalog), i.e. a curated collection of datasets and records with its own identity, such as a digital archive portal.
 */
export interface Catalog extends NamedThing {
    /** The datasets this catalog aggregates (by id). */
    datasets?: DatasetId[],
    /** The organization publishing the catalog, dataset or publication (by IDHI URN). */
    publisher?: OrganizationId,
    /** Thematic keywords for the catalog/dataset, multilingual. */
    themes?: LangString[],
}


export function isCatalog(o: object): o is Catalog {
    return (
        'id' in o
    )
}

export function toCatalog(o: Catalog): Catalog {
    return {
        datasets: o.datasets ?? [],
        publisher: o.publisher ?? null,
        themes: o.themes ?? [],
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * A dataset produced or curated by a project (DCAT Dataset): corpora, databases, image collections, annotation sets, etc.
 */
export interface Dataset extends NamedThing {
    /** The organization publishing the catalog, dataset or publication (by IDHI URN). */
    publisher?: OrganizationId,
    /** The license under which the tool or dataset is released. Required for anything advertised as reusable; omit only if genuinely unknown. */
    license?: string,
    /** Formal publication date (or year-01-01 if only the year is known). */
    date_issued?: date,
    /** Direct download or access URL for the dataset. */
    distribution_url?: string,
    /** Thematic keywords for the catalog/dataset, multilingual. */
    themes?: LangString[],
}


export function isDataset(o: object): o is Dataset {
    return (
        'id' in o
    )
}

export function toDataset(o: Dataset): Dataset {
    return {
        publisher: o.publisher ?? null,
        license: o.license ?? null,
        date_issued: o.date_issued ?? new Date(),
        distribution_url: o.distribution_url ?? null,
        themes: o.themes ?? [],
        id: o.id ?? '',
        name: o.name ?? [],
        description: o.description ?? [],
        homepage: o.homepage ?? null,
        identifiers: o.identifiers ?? [],
        same_as: o.same_as ?? []
    }
}

/**
 * Abstract base for reified, role-bearing relationships, following the CERIF link-entity and schema.org Role patterns. A Relationship is used instead of a direct edge whenever the connection between two entities needs its own metadata: a role and/or a validity interval. Never instantiated directly.
 */
export interface Relationship {
    /** Start of the event or of a relationship's validity (e.g. when a person joined a project or organization). */
    start_date?: date,
    /** End of the event, relationship or time period. Omit for ongoing relationships and open-ended periods. */
    end_date?: date,
}


export function isRelationship(o: object): o is Relationship {
    return (
        'start_date' in o ||
        'end_date' in o
    )
}

export function toRelationship(o: Relationship): Relationship {
    return {
        start_date: o.start_date ?? new Date(),
        end_date: o.end_date ?? new Date()
    }
}

/**
 * A person's participation in a project. Create one instance per (person, project, role) combination; if a person changed roles over time, create one instance per role with start/end dates.
 */
export interface ProjectParticipation extends Relationship {
    /** The person taking part in the project (by IDHI URN). */
    participant: PersonId,
    /** The project side of the relationship (by IDHI URN). */
    project: ProjectId,
    /** The person's function within the project team. Use PRINCIPAL_INVESTIGATOR only for the formally designated PI(s); day-to-day scholarly work is RESEARCHER, software work is DEVELOPER, enrolled students are STUDENT regardless of their task, external mentors are ADVISOR, and CONTRIBUTOR is the fallback for anything else. */
    participation_role?: string,
}


export function isProjectParticipation(o: object): o is ProjectParticipation {
    return (
        'participant' in o &&
        'project' in o
    )
}

export function toProjectParticipation(o: ProjectParticipation): ProjectParticipation {
    return {
        participant: o.participant ?? null,
        project: o.project ?? null,
        participation_role: o.participation_role ?? null,
        start_date: o.start_date ?? new Date(),
        end_date: o.end_date ?? new Date()
    }
}

/**
 * A person's employment/membership at an organization, with a position and dates (CERIF cfPerson_OrganisationUnit). Use for the person's institutional home(s), independent of any project.
 */
export interface Affiliation extends Relationship {
    /** The person affiliated with the organization (by IDHI URN). */
    member: PersonId,
    /** The organization side of the relationship (by IDHI URN). */
    organization: OrganizationId,
    /** The person's position at the organization (their job/status, not their project role). Use EMPLOYEE when no finer value fits; AFFILIATE is for formal association without employment. */
    affiliation_role?: string,
}


export function isAffiliation(o: object): o is Affiliation {
    return (
        'member' in o &&
        'organization' in o
    )
}

export function toAffiliation(o: Affiliation): Affiliation {
    return {
        member: o.member ?? null,
        organization: o.organization ?? null,
        affiliation_role: o.affiliation_role ?? null,
        start_date: o.start_date ?? new Date(),
        end_date: o.end_date ?? new Date()
    }
}

/**
 * An organization's engagement in a project (CERIF cfProject_OrganisationUnit). Use one instance per role: an organization that both hosts and funds a project gets two instances.
 */
export interface OrganizationProjectRole extends Relationship {
    /** The organization side of the relationship (by IDHI URN). */
    organization: OrganizationId,
    /** The project side of the relationship (by IDHI URN). */
    project: ProjectId,
    /** The organization's function in the project: COORDINATOR leads the consortium, PARTNER contributes work, FUNDER provides money, HOST provides the institutional home. Create one relationship instance per role. */
    org_project_role?: string,
}


export function isOrganizationProjectRole(o: object): o is OrganizationProjectRole {
    return (
        'organization' in o &&
        'project' in o
    )
}

export function toOrganizationProjectRole(o: OrganizationProjectRole): OrganizationProjectRole {
    return {
        organization: o.organization ?? null,
        project: o.project ?? null,
        org_project_role: o.org_project_role ?? null,
        start_date: o.start_date ?? new Date(),
        end_date: o.end_date ?? new Date()
    }
}

/**
 * A person's contribution to a publication, with author order and role. Create one instance per (person, publication); author_order preserves the byline sequence (1 = first author).
 */
export interface Authorship extends Relationship {
    /** The contributing person (by IDHI URN). */
    author: PersonId,
    /** The publication contributed to (by IDHI URN). */
    publication: PublicationId,
    /** Position in the byline; 1 = first author. */
    author_order?: number,
    /** The kind of contribution. AUTHOR is the default for byline authors; use EDITOR/TRANSLATOR for edited volumes and translations; CONTRIBUTOR for named non-byline contributions. */
    authorship_role?: string,
}


export function isAuthorship(o: object): o is Authorship {
    return (
        'author' in o &&
        'publication' in o
    )
}

export function toAuthorship(o: Authorship): Authorship {
    return {
        author: o.author ?? null,
        publication: o.publication ?? null,
        author_order: o.author_order ?? 0,
        authorship_role: o.authorship_role ?? null,
        start_date: o.start_date ?? new Date(),
        end_date: o.end_date ?? new Date()
    }
}

/**
 * A facility's affiliation with an organization. Use one instance per hosting/owning organization; joint labs get several.
 */
export interface FacilityAffiliation extends Relationship {
    /** The facility side of the relationship (by IDHI URN). */
    facility: FacilityId,
    /** The organization side of the relationship (by IDHI URN). */
    organization: OrganizationId,
}


export function isFacilityAffiliation(o: object): o is FacilityAffiliation {
    return (
        'facility' in o &&
        'organization' in o
    )
}

export function toFacilityAffiliation(o: FacilityAffiliation): FacilityAffiliation {
    return {
        facility: o.facility ?? null,
        organization: o.organization ?? null,
        start_date: o.start_date ?? new Date(),
        end_date: o.end_date ?? new Date()
    }
}

/**
 * Top-level holder for all IDHI records. Big entities live exactly once in these lists; everything else references them by their IDHI URN.
 */
export interface IndexContainer {
    /** All Person records in the index. */
    persons?: Person[],
    /** All Organization records in the index. */
    organizations?: Organization[],
    /** All Project records in the index. */
    projects?: Project[],
    /** All Facility records in the index. */
    facilities?: Facility[],
    /** All Tool records in the index. */
    tools?: Tool[],
    /** All Service records in the index. */
    services?: Service[],
    /** All Publication records in the index. */
    publications?: Publication[],
    /** All Event records in the index. */
    events?: Event[],
    /** All Location records in the index. */
    locations?: Location[],
    /** All TimePeriod records in the index. */
    time_periods?: TimePeriod[],
    /** All Catalog records in the index. */
    catalogs?: Catalog[],
    /** All Dataset records in the index. */
    datasets?: Dataset[],
}


export function isIndexContainer(o: object): o is IndexContainer {
    return (
        'persons' in o ||
        'organizations' in o ||
        'projects' in o ||
        'facilities' in o ||
        'tools' in o ||
        'services' in o ||
        'publications' in o ||
        'events' in o ||
        'locations' in o ||
        'time_periods' in o ||
        'catalogs' in o ||
        'datasets' in o
    )
}

export function toIndexContainer(o: IndexContainer): IndexContainer {
    return {
        persons: o.persons ?? [],
        organizations: o.organizations ?? [],
        projects: o.projects ?? [],
        facilities: o.facilities ?? [],
        tools: o.tools ?? [],
        services: o.services ?? [],
        publications: o.publications ?? [],
        events: o.events ?? [],
        locations: o.locations ?? [],
        time_periods: o.time_periods ?? [],
        catalogs: o.catalogs ?? [],
        datasets: o.datasets ?? []
    }
}


