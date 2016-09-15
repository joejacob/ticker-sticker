var tickers = [
	"AA", "AA-B", "AAC", "AAN", "AAP", "AAT", "AAV", "AB", "ABB", "ABBV", "ABC", "ABEV", "ABG", "ABM", "ABR", "ABR-A", "ABR-B", "ABR-C", "ABRN", "ABT", "ABX", "AC", "ACC", "ACCO", "ACH", "ACM", "ACN", "ACP", "ACRE", "ACV", "ACW", "ADC", "ADM", "ADPT", "ADS", "ADX", "AEB", "AED", "AEE", "AEG", "AEH", "AEK", "AEL", "AEM", "AEO", "AEP", "AER", "AES", "AES-C", "AET", "AEUA", "AF", "AF-C", "AFA", "AFB", "AFC", "AFG", "AFGE", "AFGH", "AFI", "AFL", "AFS-A", "AFS-B", "AFS-C", "AFS-D", "AFS-E", "AFSD", "AFSS", "AFST", "AFT", "AFW", "AG", "AGC", "AGCO", "AGD", "AGI", "AGM", "AGM-A", "AGM-B", "AGM-C", "AGM.A", "AGN", "AGN-A", "AGO", "AGO-B", "AGO-E", "AGO-F", "AGR", "AGRO", "AGU", "AGX", "AHC", "AHH", "AHL", "AHL-A", "AHL-B", "AHL-C", "AHP", "AHP-B", "AHS", "AHT", "AHT-A", "AHT-D", "AHT-E", "AHT-F", "AI", "AIB", "AIC", "AIF", "AIG", "AIG.W", "AIN", "AIR", "AIT", "AIV", "AIV-A", "AIW", "AIY", "AIZ", "AJG", "AJRD", "AJX", "AKO.A", "AKO.B", "AKP", "AKR", "AKS", "AL", "ALB", "ALDW", "ALE", "ALEX", "ALG", "ALJ", "ALK", "ALL", "ALL-A", "ALL-B", "ALL-C", "ALL-D", "ALL-E", "ALL-F", "ALLE", "ALLY", "ALP-O", "ALR", "ALR-B", "ALSN", "ALV", "ALX", "AM", "AMBR", "AMC", "AME", "AMFW", "AMG", "AMH", "AMH-A", "AMH-B", "AMH-C", "AMH-D", "AMH-E", "AMID", "AMP", "AMRC", "AMT", "AMT-A", "AMT-B", "AMTG", "AMX", "AN", "ANET", "ANF", "ANFI", "ANH", "ANH-A", "ANH-B", "ANH-C", "ANTM", "ANTX", "ANW", "AOD", "AOI", "AON", "AOS", "AP", "APA", "APAM", "APB", "APC", "APD", "APF", "APFH", "APH", "APLE", "APO", "APTS", "APU", "AR", "ARA", "ARC", "ARCO", "ARCX", "ARDC", "ARE", "ARE-A", "ARE-D", "ARE-E", "ARES", "ARH-C", "ARI", "ARI-A", "ARL", "ARMK", "AROC", "ARR", "ARR-A", "ARR-B", "ARU", "ARW", "ASA", "ASB", "ASB-B", "ASB-C", "ASC", "ASG", "ASGN", "ASH", "ASPN", "ASR", "ASX", "AT", "ATEN", "ATHM", "ATI", "ATKR", "ATO", "ATR", "ATTO", "ATU", "ATV", "ATW", "AU", "AUO", "AUY", "AV", "AVA", "AVAL", "AVB", "AVD", "AVG", "AVH", "AVK", "AVP", "AVT", "AVV", "AVX", "AVY", "AWF", "AWH", "AWI", "AWK", "AWP", "AWR", "AXE", "AXL", "AXLL", "AXON", "AXP", "AXR", "AXS", "AXS-C", "AXS-D", "AXTA", "AYI", "AYR", "AZN", "AZO", "AZZ", "B", "BA", "BABA", "BAC", "BAC-A", "BAC-C", "BAC-D", "BAC-E", "BAC-I", "BAC-L", "BAC-W", "BAC-Y", "BAC-Z", "BAC.A", "BAC.B", "BAF", "BAH", "BAK", "BAM", "BAN-C", "BAN-D", "BAN-E", "BANC", "BAP", "BAS", "BAX", "BBD", "BBDO", "BBF", "BBG", "BBK", "BBL", "BBN", "BBT", "BBT-D", "BBT-E", "BBT-F", "BBT-G", "BBT-H", "BBU", "BBVA", "BBW", "BBX", "BBY", "BC", "BCC", "BCE", "BCEI", "BCH", "BCO", "BCR", "BCRH", "BCS", "BCS-A", "BCS-D", "BCS.P", "BCX", "BDC", "BDC-B", "BDJ", "BDN", "BDN-E", "BDX", "BEL", "BEN", "BEP", "BERY", "BETR", "BF.A", "BF.B", "BFAM", "BFK", "BFO", "BFR", "BFS", "BFS-C", "BFZ", "BG", "BGB", "BGC", "BGCA", "BGE-B", "BGG", "BGH", "BGR", "BGS", "BGT", "BGX", "BGY", "BH", "BHE", "BHI", "BHK", "BHL", "BHLB", "BHP", "BID", "BIF", "BIG", "BIO", "BIO.B", "BIO.W", "BIOA", "BIP", "BIT", "BITA", "BJZ", "BK", "BK-C", "BKD", "BKE", "BKFS", "BKH", "BKHU", "BKK", "BKN", "BKS", "BKT", "BKU", "BLD", "BLH", "BLK", "BLL", "BLOX", "BLW", "BLX", "BMA", "BME", "BMI", "BML-G", "BML-H", "BML-I", "BML-J", "BML-L", "BMO", "BMS", "BMY", "BNED", "BNJ", "BNS", "BNY", "BOE", "BOH", "BOI", "BOOT", "BORN", "BOX", "BOXC", "BP", "BPI", "BPK", "BPL", "BPT", "BPY", "BQH", "BR", "BRC", "BRFS", "BRK.A", "BRK.B", "BRO", "BRS", "BRSS", "BRT", "BRX", "BSAC", "BSBR", "BSD", "BSE", "BSL", "BSM", "BSMX", "BST", "BSX", "BT", "BTA", "BTE", "BTO", "BTT", "BTZ", "BUD", "BUI", "BURL", "BVN", "BW", "BWA", "BWG", "BWP", "BWXT", "BX", "BXC", "BXE", "BXMT", "BXMX", "BXP", "BXP-B", "BXS", "BYD", "BYM", "BZH", "C", "C-C", "C-J", "C-K", "C-L", "C-N", "C-P", "C-S", "C.A", "CAA", "CAB", "CABO", "CACI", "CAE", "CAF", "CAG", "CAH", "CAI", "CAJ", "CAL", "CALX", "CAPL", "CAS", "CAT", "CATO", "CB", "CBA", "CBB", "CBB-B", "CBD", "CBG", "CBI", "CBK", "CBL", "CBL-D", "CBL-E", "CBM", "CBO", "CBPX", "CBR", "CBS", "CBS.A", "CBT", "CBU", "CBX", "CBZ", "CC", "CCC", "CCE", "CCI", "CCI-A", "CCJ", "CCK", "CCL", "CCM", "CCO", "CCP", "CCS", "CCU", "CCV", "CCZ", "CDE", "CDI", "CDR", "CDR-B", "CE", "CEA", "CEB", "CEE", "CEL", "CELP", "CEM", "CEN", "CEO", "CEQP", "CF", "CFC-A", "CFC-B", "CFG", "CFI", "CFR", "CFR-A", "CFX", "CGA", "CGG", "CGI", "CHA", "CHCT", "CHD", "CHE", "CHGG", "CHH", "CHK", "CHK-D", "CHKR", "CHL", "CHMI", "CHMT", "CHN", "CHS", "CHS-A", "CHSP", "CHT", "CHU", "CI", "CIA", "CIB", "CIE", "CIEN", "CIF", "CIG", "CIG.C", "CII", "CIM", "CINR", "CIO", "CIR", "CIT", "CIVI", "CKH", "CL", "CLA", "CLB", "CLC", "CLD", "CLDT", "CLF", "CLGX", "CLH", "CLI", "CLN-A", "CLN-B", "CLN-C", "CLNY", "CLR", "CLS", "CLW", "CLX", "CM", "CMA", "CMA.W", "CMC", "CMCM", "CMG", "CMI", "CMN", "CMO", "CMO-E", "CMP", "CMR-B", "CMR-C", "CMR-D", "CMRE", "CMS", "CMS-B", "CMU", "CNA", "CNC", "CNCO", "CNHI", "CNI", "CNK", "CNNX", "CNO", "CNP", "CNQ", "CNS", "CNX", "CNXC", "CO", "CODI", "COE", "COF", "COF-C", "COF-D", "COF-F", "COF-G", "COF-P", "COF.W", "COG", "COH", "COL", "COO", "COP", "COR", "COR-A", "CORR", "COT", "COTV", "COTY", "CP", "CPA", "CPAC", "CPB", "CPE", "CPE-A", "CPF", "CPG", "CPK", "CPL", "CPN", "CPPL", "CPS", "CPT", "CR", "CRC", "CRCM", "CRD.A", "CRD.B", "CRH", "CRI", "CRK", "CRL", "CRM", "CRR", "CRS", "CRT", "CRY", "CS", "CSC", "CSH", "CSI", "CSL", "CSLT", "CSRA", "CSS", "CST", "CSTM", "CSU", "CSV", "CTAA", "CTB", "CTL", "CTLT", "CTQ", "CTR", "CTS", "CTT", "CTU", "CTV", "CTW", "CTX", "CTY", "CTZ", "CUB", "CUB-A", "CUB-C", "CUB-D", "CUB-E", "CUBE", "CUBI", "CUBS", "CUDA", "CUK", "CUZ", "CVA", "CVB", "CVE", "CVEO", "CVG", "CVI", "CVO", "CVRR", "CVS", "CVT", "CVX", "CW", "CWEI", "CWT", "CX", "CXE", "CXH", "CXO", "CXP", "CXW", "CYD", "CYH", "CYS", "CYS-A", "CYS-B", "CZZ", "D", "DAC", "DAL", "DAN", "DANG", "DAR", "DATA", "DB", "DBD", "DBL", "DCA", "DCI", "DCM", "DCO", "DCT", "DCUC", "DCUD", "DD", "DD-A", "DD-B", "DDC", "DDD", "DDE", "DDF", "DDR", "DDR-J", "DDR-K", "DDS", "DDT", "DE", "DEA", "DECK", "DEI", "DEL", "DEO", "DEX", "DF", "DFP", "DFS", "DFS-B", "DFT", "DFT-C", "DG", "DGI", "DGX", "DHF", "DHG", "DHI", "DHR", "DHT", "DHX", "DIAX", "DIN", "DIS", "DK", "DKL", "DKS", "DKT", "DL", "DLB", "DLN-A", "DLNG", "DLPH", "DLR", "DLR-E", "DLR-F", "DLR-G", "DLR-H", "DLR-I", "DLX", "DM", "DMB", "DMD", "DMO", "DNB", "DNI", "DNOW", "DNP", "DNR", "DO", "DOC", "DOOR", "DOV", "DOW", "DPG", "DPLO", "DPM", "DPS", "DPZ", "DQ", "DRA", "DRD", "DRE", "DRH", "DRI", "DRII", "DRQ", "DRUA", "DSE", "DSL", "DSM", "DST", "DSU", "DSW", "DSX", "DSX-B", "DSXN", "DTE", "DTF", "DTJ", "DTK", "DTL.P", "DTQ", "DTZ", "DUC", "DUK", "DUKH", "DV", "DVA", "DVD", "DVN", "DW", "DX", "DX-A", "DX-B", "DXB", "DY", "DYN", "DYN-A", "DYN.W", "DYNC", "E", "EAA", "EAB", "EAE", "EARN", "EAT", "EBF", "EBS", "EC", "ECA", "ECC", "ECCA", "ECCZ", "ECL", "ECOM", "ECR", "ECT", "ED", "EDD", "EDE", "EDF", "EDI", "EDN", "EDR", "EDU", "EE", "EEA", "EEP", "EEQ", "EFC", "EFF", "EFM", "EFR", "EFT", "EFX", "EGF", "EGIF", "EGL", "EGN", "EGO", "EGP", "EGY", "EHI", "EHIC", "EHT", "EIG", "EIX", "EJ", "EL", "ELA", "ELB", "ELJ", "ELLI", "ELP", "ELS", "ELS-C", "ELU", "ELY", "EMC", "EMD", "EME", "EMES", "EMF", "EMG", "EMN", "EMO", "EMR", "EMZ", "ENB", "ENBL", "ENH", "ENH-C", "ENIA", "ENIC", "ENJ", "ENLC", "ENLK", "ENO", "ENR", "ENS", "ENV", "ENVA", "ENZ", "EOCA", "EOCC", "EOD", "EOG", "EOI", "EOS", "EOT", "EP-C", "EPAM", "EPC", "EPD", "EPE", "EPR", "EPR-C", "EPR-E", "EPR-F", "EQC", "EQC-D", "EQCO", "EQGP", "EQM", "EQR", "EQS", "EQT", "EQY", "ERA", "ERF", "ERJ", "EROS", "ES", "ESD", "ESE", "ESI", "ESL", "ESNT", "ESRT", "ESS", "ESV", "ETB", "ETE", "ETG", "ETH", "ETJ", "ETM", "ETN", "ETO", "ETP", "ETR", "ETV", "ETW", "ETX", "ETY", "EURN", "EV", "EVA", "EVC", "EVDY", "EVE-A", "EVER", "EVF", "EVG", "EVGN", "EVH", "EVHC", "EVN", "EVR", "EVRI", "EVT", "EVTC", "EW", "EXAR", "EXC", "EXCU", "EXD", "EXG", "EXK", "EXP", "EXPR", "EXR", "EXTN", "EZT", "F", "FAC", "FAF", "FAM", "FAV", "FBC", "FBHS", "FBP", "FBR", "FC", "FCAM", "FCAU", "FCB", "FCE.A", "FCE.B", "FCF", "FCH", "FCH-A", "FCN", "FCPT", "FCT", "FCX", "FDC", "FDEU", "FDP", "FDS", "FDX", "FE", "FEI", "FELP", "FENG", "FEO", "FET", "FF", "FFA", "FFC", "FFG", "FGB", "FGL", "FGP", "FHN", "FHN-A", "FHY", "FI", "FICO", "FIF", "FIG", "FII", "FIS", "FIT", "FIX", "FL", "FLC", "FLO", "FLOW", "FLR", "FLS", "FLT", "FLTX", "FLY", "FMC", "FMD", "FME-A", "FMN", "FMO", "FMS", "FMSA", "FMX", "FMY", "FN", "FNB", "FNB-E", "FNF", "FNF-B", "FNFV", "FNV", "FOE", "FOF", "FOR", "FPF", "FPI", "FPL", "FPO", "FPT", "FR", "FRA", "FRC", "FRC-A", "FRC-B", "FRC-C", "FRC-D", "FRC-E", "FRC-F", "FRC-G", "FRO", "FRT", "FSB", "FSCE", "FSD", "FSIC", "FSM", "FSS", "FT", "FTAI", "FTI", "FTK", "FTV", "FUL", "FUN", "FUR", "FXCM", "G", "GAB", "GAB-D", "GAB-G", "GAB-H", "GAB-J", "GAM", "GAM-B", "GATX", "GBAB", "GBL", "GBX", "GCAP", "GCH", "GCI", "GCO", "GCP", "GCV", "GCV-B", "GD", "GDDY", "GDF", "GDL", "GDL-B", "GDO", "GDOT", "GDV", "GDV-A", "GDV-D", "GDV-G", "GE", "GEB", "GEF", "GEF.B", "GEH", "GEK", "GEL", "GEN", "GEO", "GEQ", "GER", "GES", "GF", "GFA", "GFF", "GFI", "GFY", "GG", "GGB", "GGE", "GGG", "GGM", "GGP", "GGP-A", "GGT", "GGT-B", "GGZ", "GGZ-A", "GHC", "GHL", "GHM", "GHY", "GI", "GIB", "GIL", "GIM", "GIMO", "GIS", "GJH", "GJO", "GJP", "GJR", "GJS", "GJT", "GJV", "GKOS", "GLF", "GLO-A", "GLOB", "GLOG", "GLOP", "GLP", "GLT", "GLW", "GM", "GM.B", "GME", "GMED", "GMRE", "GMS", "GMTA", "GMZ", "GNC", "GNE", "GNE-A", "GNK", "GNL", "GNRC", "GNRT", "GNT", "GNW", "GOF", "GOL", "GPC", "GPE-A", "GPI", "GPK", "GPM", "GPN", "GPRK", "GPS", "GPT", "GPT-A", "GPX", "GRA", "GRAM", "GRO", "GRP.U", "GRR", "GRUB", "GRX", "GRX-A", "GRX-B", "GS", "GS-A", "GS-B", "GS-C", "GS-D", "GS-I", "GS-J", "GS-K", "GS-N", "GSBD", "GSH", "GSJ", "GSK", "GSL", "GSL-B", "GTN", "GTN.A", "GTS", "GTT", "GTY", "GUT", "GUT-A", "GUT-C", "GVA", "GWB", "GWR", "GWRE", "GWW", "GXP", "GXP-A", "GXP-D", "GXP-E", "GYB", "GYC", "GZT", "H", "HAE", "HAL", "HAR", "HASI", "HBI", "HBM", "HBM.W", "HCA", "HCI", "HCJ", "HCLP", "HCN", "HCN-I", "HCN-J", "HCP", "HD", "HDB", "HE", "HE-U", "HEI", "HEI.A", "HEP", "HEQ", "HES", "HES-A", "HF", "HFC", "HGG", "HGH", "HGT", "HHC", "HHS", "HHY", "HI", "HIE", "HIFR", "HIG", "HIG.W", "HII", "HIL", "HIO", "HIVE", "HIW", "HIX", "HJV", "HK", "HL", "HL-B", "HLF", "HLI", "HLS", "HLS.W", "HLT", "HLX", "HMC", "HMLP", "HMN", "HMY", "HNI", "HNP", "HNR", "HOG", "HOME", "HON", "HOS", "HOT", "HOV", "HP", "HPE", "HPF", "HPI", "HPP", "HPQ", "HPS", "HQH", "HQL", "HR", "HRB", "HRC", "HRG", "HRI", "HRL", "HRS", "HRTG", "HSB-A", "HSBC", "HSC", "HSEA", "HSEB", "HST", "HSY", "HT", "HT-C", "HT-D", "HTA", "HTD", "HTF", "HTGC", "HTGX", "HTGY", "HTGZ", "HTH", "HTR", "HTY", "HTZ", "HUBB", "HUBS", "HUM", "HUN", "HVT", "HVT.A", "HW", "HXL", "HY", "HYB", "HYH", "HYI", "HYT", "HZN", "HZO", "IAE", "IAG", "IBA", "IBM", "IBN", "IBP", "ICB", "ICD", "ICE", "ICL", "IDA", "IDE", "IDT", "IEX", "IFF", "IFN", "IGA", "IGD", "IGI", "IGR", "IGT", "IHC", "IHD", "IHG", "IID", "IIF", "IIM", "IL", "IM", "IMAX", "IMN", "IMPR", "IMPV", "IMS", "INB", "IND", "INF", "INFY", "ING", "INGR", "INN", "INN-A", "INN-B", "INN-C", "INN-D", "INST", "INT", "INVN", "INXN", "INZ", "IO", "IOC", "IP", "IPG", "IPHI", "IPI", "IPL-D", "IQI", "IR", "IRE-B", "IRE.P", "IRET", "IRL", "IRM", "IRR", "IRS", "ISD", "ISF", "ISG", "ISP", "IT", "ITC", "ITCB", "ITG", "ITGR", "ITT", "ITUB", "ITW", "IVC", "IVH", "IVR", "IVR-A", "IVR-B", "IVZ", "IX", "JAX", "JBK", "JBL", "JBN", "JBR", "JBT", "JCAP", "JCE", "JCI", "JCP", "JDD", "JE", "JEC", "JEQ", "JFC", "JFR", "JGH", "JGV", "JHA", "JHD", "JHI", "JHS", "JHX", "JHY", "JKS", "JLL", "JLS", "JMEI", "JMF", "JMLP", "JMM", "JMP", "JMPB", "JMPC", "JMT", "JNJ", "JNPR", "JNS", "JOE", "JOF", "JONE", "JOY", "JP", "JPC", "JPEP", "JPI", "JPM", "JPM-A", "JPM-B", "JPM-D", "JPM-E", "JPM-F", "JPM-G", "JPM-H", "JPM.W", "JPS", "JPW", "JQC", "JRI", "JRO", "JSD", "JTA", "JTD", "JW.A", "JW.B", "JWN", "K", "KAI", "KAMN", "KAP", "KAR", "KATE", "KB", "KBH", "KBR", "KCC", "KCG", "KDMN", "KED", "KEF", "KEM", "KEN", "KEP", "KEX", "KEY", "KEY-G", "KEY-H", "KEYS", "KF", "KFH", "KFI", "KFN.P", "KFS", "KFY", "KGC", "KHI", "KIM", "KIM-I", "KIM-J", "KIM-K", "KIO", "KKR", "KKR-A", "KKR-B", "KMB", "KMF", "KMG", "KMI", "KMI-A", "KMI.W", "KMM", "KMPA", "KMPR", "KMT", "KMX", "KN", "KND", "KNL", "KNOP", "KNX", "KO", "KOD.W", "KOD.X", "KODK", "KOF", "KOP", "KORS", "KOS", "KR", "KRA", "KRC", "KRC-G", "KRC-H", "KRG", "KRO", "KS", "KSM", "KSS", "KST", "KSU", "KSU.P", "KT", "KTF", "KTH", "KTN", "KTP", "KW", "KWN", "KWR", "KYE", "KYN", "KYN-F", "KYN-G", "KYO", "L", "LAD", "LADR", "LAZ", "LB", "LBF", "LC", "LCI", "LCM", "LDF", "LDL", "LDOS", "LDP", "LDR", "LEA", "LEE", "LEG", "LEJU", "LEN", "LEN.B", "LEO", "LFC", "LFL", "LGF", "LGI", "LH", "LHO", "LHO-H", "LHO-I", "LHO-J", "LII", "LITB", "LL", "LLL", "LLY", "LM", "LMHA", "LMT", "LN", "LNC", "LNC.W", "LND", "LNKD", "LNN", "LNT", "LOCK", "LOR", "LOW", "LPG", "LPI", "LPL", "LPT", "LPX", "LQ", "LRN", "LSI", "LTC", "LUB", "LUK", "LUV", "LUX", "LVLT", "LVS", "LXFR", "LXFT", "LXK", "LXP", "LXP-C", "LXU", "LYB", "LYG", "LYV", "LZB", "M", "MA", "MAA", "MAC", "MAIN", "MAN", "MANU", "MAS", "MATX", "MAV", "MBI", "MBLY", "MBT", "MC", "MCA", "MCC", "MCD", "MCI", "MCK", "MCN", "MCO", "MCQ", "MCR", "MCRN", "MCS", "MCV", "MCX", "MCY", "MD", "MDC", "MDLY", "MDP", "MDR", "MDT", "MDU", "MED", "MEG", "MEI", "MEN", "MEP", "MER-K", "MER-M", "MER-P", "MET", "MET-A", "MFA", "MFA-B", "MFC", "MFCB", "MFD", "MFG", "MFL", "MFM", "MFO", "MFS", "MFT", "MFV", "MG", "MGA", "MGF", "MGM", "MGP", "MGR", "MGU", "MH-A", "MH-C", "MHD", "MHF", "MHG", "MHI", "MHK", "MHLA", "MHN", "MHNB", "MHNC", "MHO", "MHO-A", "MHY", "MIC", "MIE", "MIN", "MIT-A", "MIT-B", "MITT", "MIXT", "MIY", "MJN", "MKC", "MKC.V", "MKL", "MLI", "MLM", "MLP", "MLR", "MMC", "MMD", "MMI", "MMM", "MMP", "MMS", "MMT", "MMU", "MN", "MNE", "MNI", "MNK", "MNP", "MNR", "MNR-A", "MNR-B", "MO", "MOD", "MODN", "MOG.A", "MOG.B", "MOH", "MON", "MORE", "MOS", "MOV", "MP-D", "MPA", "MPC", "MPG", "MPLX", "MPSX", "MPV", "MPW", "MPX", "MQT", "MQY", "MRC", "MRIN", "MRK", "MRO", "MS", "MS-A", "MS-E", "MS-F", "MS-G", "MS-I", "MSA", "MSB", "MSCA", "MSCI", "MSD", "MSF", "MSG", "MSGN", "MSI", "MSK", "MSL", "MSM", "MSP", "MT", "MTB", "MTB-C", "MTB.P", "MTB.W", "MTD", "MTDR", "MTG", "MTH", "MTL", "MTL.P", "MTN", "MTOR", "MTR", "MTRN", "MTT", "MTU", "MTW", "MTX", "MTZ", "MUA", "MUC", "MUE", "MUH", "MUI", "MUJ", "MUR", "MUS", "MUSA", "MUX", "MVC", "MVCB", "MVO", "MVT", "MWA", "MWG", "MWO", "MWR", "MWW", "MX", "MXE", "MXF", "MXL", "MYC", "MYCC", "MYD", "MYE", "MYF", "MYI", "MYJ", "MYN", "MZF", "N", "NAC", "NAD", "NADL", "NAN", "NAO", "NAP", "NAT", "NAV", "NAV-D", "NAZ", "NBB", "NBD", "NBHC", "NBL", "NBR", "NC", "NCA", "NCI", "NCR", "NCS", "NCT", "NCT-B", "NCT-C", "NCT-D", "NCV", "NCZ", "NDP", "NDRO", "NE", "NEA", "NEE", "NEE-C", "NEE-G", "NEE-H", "NEE-I", "NEE-J", "NEE-K", "NEE-P", "NEE-Q", "NEFF", "NEM", "NEP", "NEU", "NEV", "NEWM", "NEWR", "NFG", "NFJ", "NFX", "NGG", "NGL", "NGL-A", "NGS", "NGVC", "NGVT", "NHA", "NHF", "NHI", "NI", "NID", "NIE", "NIM", "NIQ", "NJR", "NKE", "NKG", "NKX", "NL", "NLS", "NLSN", "NLY", "NLY-A", "NLY-C", "NLY-D", "NLY-E", "NM", "NM-G", "NM-H", "NMBL", "NMFC", "NMI", "NMK-B", "NMK-C", "NMM", "NMO", "NMR", "NMS", "NMT", "NMY", "NNA", "NNC", "NNI", "NNN", "NNN-D", "NNN-E", "NNY", "NOA", "NOAH", "NOC", "NOK", "NOMD", "NORD", "NOV", "NOW", "NP", "NPD", "NPF", "NPI", "NPK", "NPM", "NPO", "NPP", "NPTN", "NPV", "NQ", "NQM", "NQP", "NQS", "NR", "NRE", "NRF", "NRF-A", "NRF-B", "NRF-C", "NRF-D", "NRF-E", "NRG", "NRK", "NRP", "NRT", "NRZ", "NS", "NSA", "NSAM", "NSC", "NSH", "NSL", "NSM", "NSP", "NSR", "NSS", "NTC", "NTG", "NTL", "NTP", "NTT", "NTX", "NTZ", "NUE", "NUM", "NUO", "NUS", "NUV", "NUW", "NVG", "NVGS", "NVO", "NVR", "NVRO", "NVS", "NVTA", "NW-C", "NWE", "NWHM", "NWL", "NWN", "NWY", "NX", "NXC", "NXJ", "NXN", "NXP", "NXQ", "NXR", "NXRT", "NYC-U", "NYCB", "NYL.A", "NYLD", "NYRT", "NYT", "NZF", "O", "O-F", "OA", "OAK", "OAK-A", "OAKS", "OAS", "OB", "OC", "OCIP", "OCN", "ODC", "OEC", "OFC", "OFC-L", "OFG", "OFG-A", "OFG-B", "OFG-D", "OGE", "OGS", "OHI", "OI", "OIA", "OIB.C", "OII", "OIS", "OKE", "OKS", "OLN", "OLP", "OMAM", "OMC", "OME", "OMF", "OMI", "OMN", "ONDK", "ONE", "OOMA", "OPY", "OR", "ORA", "ORAN", "ORC", "ORCL", "ORI", "ORN", "OSB", "OSG", "OSK", "OUT", "OXM", "OXY", "OZM", "P", "PAA", "PAC", "PACD", "PAG", "PAGP", "PAH", "PAI", "PAM", "PANW", "PAR", "PAY", "PAYC", "PB", "PBA", "PBB", "PBF", "PBFX", "PBH", "PBI", "PBI-B", "PBR", "PBR.A", "PBT", "PBYI", "PCF", "PCG", "PCI", "PCK", "PCM", "PCN", "PCQ", "PDI", "PDM", "PDS", "PDT", "PE", "PEB", "PEB-B", "PEB-C", "PEB-D", "PEG", "PEI", "PEI-A", "PEI-B", "PEN", "PEO", "PEP", "PER", "PES", "PF", "PFD", "PFE", "PFG", "PFGC", "PFH", "PFK", "PFL", "PFN", "PFO", "PFS", "PFSI", "PG", "PGEM", "PGH", "PGND", "PGP", "PGR", "PGRE", "PGZ", "PH", "PHD", "PHG", "PHH", "PHI", "PHK", "PHM", "PHT", "PHX", "PII", "PIM", "PIR", "PIY", "PJC", "PJH", "PJS", "PJT", "PKD", "PKE", "PKG", "PKI", "PKO", "PKX", "PKY", "PL-C", "PL-E", "PLD", "PLNT", "PLOW", "PLT", "PM", "PMC", "PMF", "PML", "PMM", "PMO", "PMT", "PMX", "PN", "PNC", "PNC-P", "PNC-Q", "PNC.W", "PNF", "PNI", "PNM", "PNR", "PNTA", "PNW", "PNY", "POL", "POR", "POST", "POT", "PPG", "PPL", "PPP", "PPR", "PPS", "PPS-A", "PPT", "PPX", "PQ", "PRA", "PRE-D", "PRE-E", "PRE-F", "PRE-G", "PRE-H", "PRE-I", "PRGO", "PRH", "PRI", "PRLB", "PRO", "PRTY", "PRU", "PSA", "PSA-A", "PSA-B", "PSA-C", "PSA-D", "PSA-S", "PSA-T", "PSA-U", "PSA-V", "PSA-W", "PSA-X", "PSA-Y", "PSA-Z", "PSB", "PSB-S", "PSB-T", "PSB-U", "PSB-V", "PSF", "PSG", "PSO", "PSTG", "PSX", "PSXP", "PTHN", "PTR", "PTY", "PUK", "PUK-A", "PUK.P", "PVG", "PVH", "PVTD", "PWE", "PWR", "PX", "PXD", "PYN", "PYS", "PYT", "PZC", "PZE", "PZN", "Q", "QEP", "QHC", "QSR", "QTM", "QTS", "QTWO", "QUAD", "QUOT", "R", "RACE", "RAD", "RAI", "RAS", "RAS-A", "RAS-B", "RAS-C", "RATE", "RAX", "RBA", "RBC", "RBS", "RBS-F", "RBS-H", "RBS-L", "RBS-R", "RBS-S", "RBS-T", "RCI", "RCL", "RCS", "RDC", "RDN", "RDS.A", "RDS.B", "RDY", "RE", "REG", "REG-F", "REG-G", "RELX", "REN", "RENN", "RENX", "RES", "RESI", "REV", "REX", "REX-A", "REXR", "RF", "RF-A", "RF-B", "RFI", "RFP", "RFT", "RFTA", "RGA", "RGC", "RGR", "RGS", "RGT", "RH", "RHI", "RHP", "RHT", "RICE", "RIG", "RIGP", "RIO", "RIV", "RJD", "RJF", "RL", "RLGY", "RLH", "RLI", "RLJ", "RM", "RMAX", "RMD", "RMP", "RMT", "RNG", "RNP", "RNR", "RNR-C", "RNR-E", "ROG", "ROK", "ROL", "ROP", "ROYT", "RPA-A", "RPAI", "RPM", "RPT", "RPT-D", "RQI", "RRC", "RRD", "RRMS", "RRTS", "RS", "RSG", "RSO", "RSO-A", "RSO-B", "RSO-C", "RSPP", "RST", "RT", "RTEC", "RTN", "RUBI", "RVT", "RWT", "RXN", "RY", "RY-S", "RY-T", "RYA-A", "RYAM", "RYI", "RYN", "RZA", "RZB", "S", "SA", "SAH", "SAIC", "SALT", "SAM", "SAN", "SAN-A", "SAN-B", "SAN-C", "SAN-I", "SAP", "SAQ", "SAR", "SB", "SB-B", "SB-C", "SB-D", "SBGL", "SBH", "SBNA", "SBNB", "SBR", "SBS", "SBW", "SBY", "SC", "SCCO", "SCD", "SCE-F", "SCE-G", "SCE-H", "SCE-J", "SCE-K", "SCG", "SCH-B", "SCH-C", "SCH-D", "SCHW", "SCI", "SCL", "SCM", "SCNB", "SCQ", "SCS", "SCX", "SDLP", "SDR", "SDRL", "SDT", "SE", "SEAS", "SEE", "SEM", "SEMG", "SEP", "SERV", "SF", "SF-A", "SFE", "SFL", "SFN", "SFR", "SFS", "SFUN", "SGF", "SGM", "SGU", "SGY", "SGZA", "SHAK", "SHG", "SHI", "SHLX", "SHO", "SHO-E", "SHO-F", "SHOP", "SHW", "SID", "SIG", "SITE", "SIX", "SJI", "SJM", "SJR", "SJT", "SJW", "SKM", "SKT", "SKX", "SLB", "SLCA", "SLF", "SLG", "SLG-I", "SLRA", "SLTB", "SLW", "SM", "SMFG", "SMG", "SMI", "SMLP", "SMM", "SMP", "SN", "SNA", "SNE", "SNN", "SNOW", "SNP", "SNR", "SNV", "SNV-C", "SNX", "SNY", "SO", "SOJA", "SOL", "SON", "SOR", "SOV-C", "SPA", "SPB", "SPE", "SPE.P", "SPG", "SPG-J", "SPGI", "SPH", "SPLP", "SPN", "SPR", "SPXC", "SPXX", "SQ", "SQM", "SQNS", "SR", "SRC", "SRE", "SRF", "SRG", "SRI", "SRLP", "SRT", "SRV", "SSD", "SSI", "SSL", "SSNI", "SSP", "SSS", "SSTK", "SSW", "SSW-D", "SSW-E", "SSW-G", "SSW-H", "SSWN", "ST", "STA-A", "STA-B", "STA-C", "STA-D", "STA-E", "STA-F", "STA-G", "STA-I", "STAG", "STAR", "STAY", "STC", "STE", "STI", "STI-A", "STI-E", "STI.A", "STI.B", "STJ", "STK", "STL", "STM", "STN", "STNG", "STO", "STON", "STOR", "STR", "STT", "STT-C", "STT-D", "STT-E", "STT-G", "STV", "STWD", "STZ", "STZ.B", "SU", "SUI", "SUI-A", "SUM", "SUN", "SUP", "SUPV", "SVU", "SWC", "SWFT", "SWH", "SWJ", "SWK", "SWM", "SWN", "SWNC", "SWX", "SWZ", "SXC", "SXCP", "SXE", "SXI", "SXL", "SXT", "SYF", "SYK", "SYT", "SYX", "SYY", "SZC", "T", "TAC", "TAHO", "TAP", "TAP.A", "TARO", "TBI", "TCAP", "TCB", "TCB-B", "TCB-C", "TCB.W", "TCCA", "TCCB", "TCI", "TCK", "TCO", "TCO-J", "TCO-K", "TCP", "TCPI", "TCRX", "TCRZ", "TCS", "TD", "TDA", "TDC", "TDE", "TDF", "TDG", "TDI", "TDJ", "TDOC", "TDS", "TDW", "TDY", "TEF", "TEGP", "TEI", "TEL", "TEN", "TEO", "TEP", "TER", "TEVA", "TEX", "TFG", "TFX", "TG", "TGH", "TGI", "TGNA", "TGP", "TGS", "TGT", "THC", "THG", "THGA", "THO", "THQ", "THR", "THS", "THW", "TI", "TI.A", "TIER", "TIF", "TIME", "TISI", "TJX", "TK", "TKC", "TKF", "TKR", "TLI", "TLK", "TLLP", "TLN", "TLP", "TLRD", "TLYS", "TM", "TMH", "TMHC", "TMK", "TMK-B", "TMK-C", "TMO", "TMST", "TNC", "TNET", "TNH", "TNK", "TNP", "TNP-B", "TNP-C", "TNP-D", "TOL", "TOO", "TOO-A", "TOO-B", "TOT", "TOWR", "TPB", "TPC", "TPH", "TPL", "TPRE", "TPVG", "TPVZ", "TPX", "TPZ", "TR", "TRC", "TRCO", "TREC", "TREX", "TRGP", "TRI", "TRK", "TRMR", "TRN", "TRN-A", "TRNO", "TROX", "TRP", "TRQ", "TRR", "TRTN", "TRU", "TRV", "TS", "TSE", "TSI", "TSL", "TSLF", "TSLX", "TSM", "TSN", "TSNU", "TSO", "TSQ", "TSS", "TSU", "TTC", "TTF", "TTI", "TTM", "TTP", "TU", "TUMI", "TUP", "TV", "TVC", "TVE", "TVPT", "TWI", "TWLO", "TWN", "TWO", "TWTR", "TWX", "TX", "TXT", "TY", "TY.P", "TYC", "TYG", "TYL", "UA", "UA.C", "UAL", "UAM", "UAN", "UBA", "UBP", "UBP-F", "UBP-G", "UBS", "UCP", "UDR", "UE", "UFI", "UFS", "UGI", "UGP", "UHS", "UHT", "UIS", "UL", "UMC", "UMH", "UMH-A", "UMH-B", "UN", "UNF", "UNH", "UNM", "UNP", "UNT", "UNVR", "UPS", "URI", "USA", "USAC", "USB", "USB-A", "USB-H", "USB-M", "USB-N", "USB-O", "USDP", "USFD", "USG", "USM", "USNA", "USPH", "UTF", "UTI", "UTL", "UTX", "UVE", "UVV", "UZA", "UZB", "UZC", "V", "VAC", "VAL", "VAL.P", "VALE", "VAR", "VBF", "VC", "VCO", "VCRA", "VCV", "VEC", "VEDL", "VEEV", "VER", "VER-F", "VET", "VFC", "VG", "VGI", "VGM", "VGR", "VHI", "VIPS", "VIV", "VJET", "VKQ", "VLO", "VLP", "VLRS", "VLT", "VLY", "VLY-A", "VLY.W", "VMC", "VMEM", "VMI", "VMO", "VMW", "VNCE", "VNO", "VNO-G", "VNO-I", "VNO-J", "VNO-K", "VNO-L", "VNTV", "VOC", "VOYA", "VPG", "VPV", "VR", "VR-A", "VRS", "VRTV", "VRX", "VSH", "VSI", "VSLR", "VSTO", "VTA", "VTN", "VTR", "VTRB", "VTTI", "VVC", "VVI", "VVR", "VZ", "VZA", "W", "WAB", "WAC", "WAGE", "WAIR", "WAL", "WALA", "WAT", "WBAI", "WBC", "WBK", "WBS", "WBS-E", "WCC", "WCG", "WCIC", "WCN", "WD", "WDAY", "WDR", "WEA", "WEC", "WES", "WEX", "WF", "WFC", "WFC-J", "WFC-L", "WFC-N", "WFC-O", "WFC-P", "WFC-Q", "WFC-R", "WFC-T", "WFC-V", "WFC-W", "WFC-X", "WFC.W", "WFE-A", "WFT", "WG", "WGL", "WGO", "WGP", "WHG", "WHR", "WIA", "WIT", "WIW", "WK", "WLH", "WLK", "WLKP", "WLL", "WM", "WMB", "WMC", "WMK", "WMLP", "WMS", "WMT", "WNC", "WNR", "WNRL", "WNS", "WOR", "WPC", "WPG", "WPG-H", "WPG-I", "WPT", "WPX", "WPXP", "WPZ", "WR", "WRB", "WRB-B", "WRB-C", "WRB-D", "WRE", "WRI", "WRK", "WSM", "WSO", "WSO.B", "WSR", "WST", "WTI", "WTM", "WTR", "WTS", "WTW", "WU", "WUBA", "WWAV", "WWE", "WWW", "WY", "WYN", "X", "XCO", "XEC", "XEL", "XHR", "XIN", "XKE", "XL", "XNY", "XOM", "XON", "XOXO", "XPO", "XRM", "XRS", "XRX", "XTLY", "XYL", "Y", "YDKN", "YELP", "YGE", "YPF", "YRD", "YUM", "YUME", "YZC", "ZAYO", "ZB-A", "ZB-F", "ZB-G", "ZB-H", "ZBH", "ZBK", "ZEN", "ZF", "ZFC", "ZNH", "ZOES", "ZPIN", "ZTR", "ZTS", "ZX"
];

document.addEventListener('DOMContentLoaded', function() {
	// stores any tickers that have already been discovered
	var tickerStickersCreated = new Object();

	// search through DOM for text nodes
	var walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

	while(walk.nextNode()) {
		var currTextNode = walk.currentNode;
		var currTextNodeParent = currTextNode.parentNode;
		//var tickerFound = false;
		var wordIndex = 0;

		// iterate through each word of the text node to look for stock tickers
		var nodeTextArr = currTextNode.textContent.split(/(\s+)/);
		// console.log("went to next node and wordIndex is: " + wordIndex);
		for(var i = 0; i < nodeTextArr.length; i++) {
			var scrubbedText = nodeTextArr[i].replace(/\(/g, "")
											 .replace(/\)/g, "")
											 .replace(/\$/g, "");
			if (scrubbedText in tickerStickersCreated || tickers.indexOf(scrubbedText) > -1) {
				// tickerFound = true;
				// console.log("parent before split:");
				// console.log(currTextNodeParent);
				// // split the current text node
				// console.log("text to be split:");
				// console.log(currTextNode);
				// console.log(currTextNode.textContent);
				// console.log(currTextNode.textContent.length);
				// console.log(nodeTextArr);
				// console.log("i: " + i + " " + wordIndex + " " + nodeTextArr[i].length + " " + nodeTextArr[i]);
				var restCurrTextNode = currTextNode.splitText(wordIndex + nodeTextArr[i].length);	// textnode up until right after ticker
				var tickerTextNode = currTextNode.splitText(wordIndex);	// textnode up until right before ticker

				// make the new tickerSticker
				var tickerSticker;
				if (tickerStickersCreated[scrubbedText] != null) {
					tickerSticker = tickerStickersCreated[scrubbedText].cloneNode(true);
				} else {
					tickerSticker = makeTickerSticker(scrubbedText);
				}

				// replace text content with non-scrubbed text
				//tickerSticker.childNodes[0].textContent = nodeTextArr[i];

				// replace the old text node
				try {
					// console.log("parent before:");
					// console.log(currTextNodeParent);
					// console.log("parent before children:");
					// console.log(currTextNodeParent.childNodes);
					// console.log("tooltip:");
					// console.log(tickerSticker);
					// console.log("textnode:");
					// console.log(tickerTextNode);
					currTextNodeParent.replaceChild(tickerSticker, tickerTextNode);
				} catch(err) {
					console.log(err);
				}
					// console.log("replace child failure");
					// console.log("parent after:");
					// console.log(currTextNodeParent);

				tickerStickersCreated[scrubbedText] = tickerSticker;	// save ticker for next time
				currTextNode = restCurrTextNode;	// update textnode to reflect the next part of it
				wordIndex = 0;
				walk.nextNode();	// treewalker is dynamic so this accounts for the two newly created nodes
				walk.nextNode();
			} else {
				wordIndex += nodeTextArr[i].length;
			}
		}
	}
});


function makeTickerSticker(tickerName) {
	var stickerParent = document.createElement("a");
	stickerParent.classList.add("stickerParent");
	stickerParent.setAttribute("href", "#");
	stickerParent.textContent = tickerName;

	var sticker = document.createElement("div");
	sticker.classList.add("sticker");
	stickerParent.appendChild(sticker);

	// making the tabpane frame
	var stickerTabPane = document.createElement("ul");
	stickerTabPane.classList.add("nav", "nav-tabs", "nav-justified");
	stickerTabPane.setAttribute("data-tabs", "tabs");
	sticker.appendChild(stickerTabPane);

	var mainStockTab = document.createElement("li");
	mainStockTab.classList.add("active");
	var mainStockTabName = document.createElement("a");
	mainStockTabName.setAttribute("data-toggle", "tab");
	mainStockTabName.setAttribute("href", "#General");
	mainStockTabName.textContent = "General";
	mainStockTab.appendChild(mainStockTabName);
	stickerTabPane.appendChild(mainStockTab);
	
	// creating the tabpane content
	var stickerTabPaneContent = document.createElement("div");
	stickerTabPaneContent.classList.add("tab-content");
	sticker.appendChild(stickerTabPaneContent);

	var mainStockTabContent = document.createElement("div");
	mainStockTabContent.classList.add("tab-pane", "active");
	mainStockTabContent.setAttribute("id", "General");
	stickerTabPaneContent.appendChild(mainStockTabContent);

	// getting the ticker data on first hover
	$( stickerParent ).mouseover( function(event) {
		event.preventDefault();
		stickerHoverAction(event, tickerName, mainStockTabContent);
		// stickerHoverAction(event, tickerName, mainStockTabContent).done( function(tickerDataTable){
		// 	mainStockTabContent.appendChild(tickerDataTable);
		// });
		// var tickerDataTable = stickerHoverAction(event, tickerName);
		// mainStockTabContent.appendChild(tickerDataTable);
		$( this ).unbind(event);
	});
	return stickerParent;
}

function stickerHoverAction(event, tickerName, mainStockTabContent) {
	
	var xmlhttp = new XMLHttpRequest();
	var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20%3D%20%22" + tickerName + "%22%09%09&format=json&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback="
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var tickerData = JSON.parse(this.responseText);
			var tickerDataTable = makeTickerDataTable(tickerData);
			//return tickerDataTable;
			mainStockTabContent.appendChild(tickerDataTable);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	// don't need to do this again
	//$( this ).unbind(event);
}

function makeTickerDataTable(tickerData) {
	var quote = new Object();
	if (tickerData["query"]["results"] != null) {
		quote = tickerData["query"]["results"]["quote"];
	}
	console.log(quote);

	// create main table
	var tableDiv = document.createElement("div");
	tableDiv.classList.add("table-responsive");
	var tickerTable = document.createElement("table-condensed");
	tickerTable.classList.add("table");
	tableDiv.appendChild(tickerTable);

	// table rows
	var tableRowName = document.createElement("tr");
	tableRowName.classList.add("tr");
	tableRowName.textContent = "Name: " + quote["Name"];
	tableDiv.appendChild(tableRowName);

	var tableRowOpen = document.createElement("tr");
	tableRowOpen.classList.add("tr");
	tableRowOpen.textContent = "Open: " + quote["Open"];
	tableDiv.appendChild(tableRowOpen);

	var tableRowClose = document.createElement("tr");
	tableRowClose.classList.add("tr");
	tableRowClose.textContent = "Close: " + quote["PreviousClose"];
	tableDiv.appendChild(tableRowClose);

	var tableRowBid = document.createElement("tr");
	tableRowBid.classList.add("tr");
	tableRowBid.textContent = "Bid: " + quote["Bid"];
	tableDiv.appendChild(tableRowBid);

	var tableRowAsk = document.createElement("tr");
	tableRowAsk.classList.add("tr");
	tableRowAsk.textContent = "Ask: " + quote["Ask"];
	tableDiv.appendChild(tableRowAsk);

	var tableRowDaysRange = document.createElement("tr");
	tableRowDaysRange.classList.add("tr");
	tableRowDaysRange.textContent = "Day's Range: " + quote["DaysRange"];
	tableDiv.appendChild(tableRowDaysRange);

	var tableRowYearRange = document.createElement("tr");
	tableRowYearRange.classList.add("tr");
	tableRowYearRange.textContent = "Year Range: " + quote["YearRange"];
	tableDiv.appendChild(tableRowYearRange);

	var tableRowMarketCap = document.createElement("tr");
	tableRowMarketCap.classList.add("tr");
	tableRowMarketCap.textContent = "Market Cap: " + quote["MarketCapitalization"];
	tableDiv.appendChild(tableRowMarketCap);

	var tableRowVolume = document.createElement("tr");
	tableRowVolume.classList.add("tr");
	tableRowVolume.textContent = "Volume: " + quote["Volume"];
	tableDiv.appendChild(tableRowVolume);

	var tableRowEBITDA = document.createElement("tr");
	tableRowEBITDA.classList.add("tr");
	tableRowEBITDA.textContent = "EBITDA: " + quote["EBITDA"];
	tableDiv.appendChild(tableRowEBITDA);

	var tableRowEPS = document.createElement("tr");
	tableRowEPS.classList.add("tr");
	tableRowEPS.textContent = "EPS: " + quote["EarningsShare"];
	tableDiv.appendChild(tableRowEPS);

	return tableDiv;
	//
	//  actual company name quote["name"]
	//  quote["Bid"]
	//  quote["Ask"]
	// quote["ChangeInPercent"]
	//  quote["EBITDA"]
	//  quote["EarningsShare"]
	//  quote["MarketCapitalization"]
	//  quote["Volume"]
	// quote["Symbol"]
	//  quote["Open"]
	//  quote["PreviousClose"]
	//  quote["DaysRange"]
	//  quote["YearRange"]
}