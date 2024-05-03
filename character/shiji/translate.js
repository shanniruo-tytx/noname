const translates = {
	liuba_prefix: "手杀",
	sp_zhujun_prefix: "手杀",
	sp_huangfusong_prefix: "手杀",
	sp_zhangchangpu_prefix: "手杀",
	sp_cuiyan_prefix: "手杀",
	sp_huaman_prefix: "手杀",
	sp_gaolan_prefix: "手杀",
	sunyi_prefix: "手杀",
	sp_wangshuang_prefix: "手杀",
	sp_zongyu_prefix: "手杀",
	db_wenyang_prefix: "手杀",
	sp_yanghu_prefix: "手杀",
	sp_zhangwen_prefix: "手杀",
	sp_xujing_prefix: "手杀",
	sp_huaxin_prefix: "手杀",
	zhouchu_prefix: "手杀",
	sp_mifuren_prefix: "手杀",
	sp_xinpi_prefix: "手杀",
	sp_bianfuren_prefix: "手杀",
	sp_duyu_prefix: "手杀",
	luotong_prefix: "手杀",
	sp_wangcan_prefix: "手杀",
	sp_sunshao_prefix: "手杀",
	sp_xunchen_prefix: "手杀",
	sp_kongrong_prefix: "手杀",

	sp_wangcan: "手杀王粲",
	spqiai: "七哀",
	spqiai_info: "出牌阶段限一次，你可以将一张非基本牌交给一名其他角色。然后其选择一项：①你回复1点体力。②你摸两张牌。",
	spshanxi: "善檄",
	spshanxi_suoming: "善檄",
	spshanxi_info: "出牌阶段开始时，你可令一名其他角色获得“檄”标记并清除场上已有的其他“檄”标记（若有）。有“檄”标记的角色回复体力时，若其体力值大于0，则其需选择一项：①交给你两张牌。②失去1点体力。",
	sp_chenzhen: "陈震",
	shameng: "歃盟",
	shameng_info: "出牌阶段限一次，你可弃置两张颜色相同的手牌并选择一名其他角色。其摸两张牌，然后你摸三张牌。",
	sp_sunshao: "手杀孙邵",
	fubi: "辅弼",
	fubi2: "辅弼",
	fubi_info: "游戏开始时，你可选择一名其他角色。该角色的手牌上限于你死亡前+3。",
	zuici: "罪辞",
	zuici_info: "当你进入濒死状态时，你可废除你的一个不为空的装备栏，然后将体力值回复至1点。",
	sp_xunchen: "手杀荀谌",
	jianzhan: "谏战",
	jianzhan_info: "出牌阶段限一次，你可选择一名其他角色A和其攻击范围内的另一名手牌数小于其的角色B。A选择一项：①视为对B使用一张【杀】。②令你摸一张牌。",
	duoji: "夺冀",
	duoji_info: "限定技，出牌阶段，你可弃置两张手牌并选择一名装备区有牌的其他角色。你获得其装备区里的所有牌。",
	binglinchengxiax: "兵临城下",
	binglinchengxiax_info: "出牌阶段，对一名其他角色使用。你亮出牌堆顶的四张牌，依次对其使用其中所有的【杀】，然后将剩余的牌置于牌堆顶。",
	mjweipo: "危迫",
	mjweipo_effect: "危迫",
	mjweipo_remove: "危迫",
	mjweipo_info: "出牌阶段限一次。你可以选择一个智囊或【兵临城下】，令一名没有〖危迫〗效果的角色获得如下一次性效果直到你下回合开始：其可于出牌阶段弃置一张【杀】，并获得一张你选择的牌。",
	mjchenshi: "陈势",
	mjchenshi_player: "陈势",
	mjchenshi_target: "陈势",
	mjchenshi_info: "当有角色使用【兵临城下】指定第一个目标后，其可交给你一张牌，并将牌堆的顶三张牌中所有不为【杀】的牌置入弃牌堆；当有角色成为【兵临城下】的目标后，其可交给你一张牌，然后将牌堆顶三张牌中所有的【杀】置入弃牌堆。",
	mjmouzhi: "谋识",
	mjmouzhi_info: "锁定技，当你受到伤害时，若伤害渠道对应的牌和你上次受到的伤害花色相同，则你防止此伤害。",
	luotong: "手杀骆统",
	qinzheng: "勤政",
	qinzheng_info: "锁定技，当你使用或打出牌时，若你本局游戏内使用或打出过的牌数和：为3的倍数，你从牌堆中获得一张【杀】或【闪】；为5的倍数，你从牌堆中获得一张【桃】或【酒】；为8的倍数，你从牌堆中获得一张【决斗】或【无中生有】（可获得对应的衍生替换牌）。",
	sp_duyu: "手杀杜预",
	spwuku: "武库",
	spwuku_info: "锁定技，当有角色使用装备牌时，若你的“武库”数小于3，则你获得一个“武库”。",
	spwuku_info_guozhan: "锁定技，当有其他势力的角色使用装备牌时，若你的“武库”数小于2，则你获得一个“武库”。",
	spsanchen: "三陈",
	spsanchen_info: "觉醒技，结束阶段，若你的“武库”数大于2，则你加1点体力上限并回复1点体力，然后获得〖灭吴〗。",
	spmiewu: "灭吴",
	spmiewu2: "灭吴",
	spmiewu_backup: "灭吴",
	spmiewu_info: "每回合限一次。你可弃置一枚“武库”并将一张牌当做任意基本牌或锦囊牌使用，然后摸一张牌。",
	sp_bianfuren: "手杀卞夫人",
	spwanwei: "挽危",
	spwanwei_info: "每轮累计限一次。①出牌阶段，你可选择一名其他角色。②当有其他角色处于濒死状态时。你可令该角色回复X+1点体力（至少回复至1），然后你失去X点体力。（X为你的体力值）",
	spyuejian: "约俭",
	spyuejian_info: "锁定技，你的手牌上限基数等于你的体力上限。当你处于濒死状态时，你可弃置两张牌，然后回复1点体力。",
	feiyi: "手杀费祎",
	feiyi_prefix: "手杀",
	reshengxi: "生息",
	reshengxi_info: "结束阶段，若你于本回合内未造成过伤害，则你可摸两张牌。",
	fyjianyu: "谏喻",
	fyjianyu_info: "每轮限一次。出牌阶段，你可选择两名角色，令这些角色获得“喻”直到你的下回合开始。当一名有“喻”的角色A使用牌指定另一名有“喻”的角色B为目标时，你令B摸一张牌。",
	mjshengxi: "生息",
	mjshengxi_info: "准备阶段，你可以获得一张【调剂盐梅】；结束阶段，若你本回合使用过牌且未造成伤害，则你可以获得一张智囊或摸一张牌。",
	mjkuanji: "宽济",
	mjkuanji_info: "每回合限一次。当你因弃置而失去牌后，你可令一名其他角色获得其中的一张牌，然后你摸一张牌。",
	tiaojiyanmei: "调剂盐梅",
	tiaojiyanmei_info: "出牌阶段，对两名手牌数不均相同的其他角色使用。若目标角色于此牌使用准备工作结束时的手牌数大于此时所有目标的平均手牌数，其弃置一张牌。若小于则其摸一张牌。此牌使用结束后，若所有目标角色的手牌数均相等，则你可令一名角色获得所有因执行此牌效果而弃置的牌。",
	refubi: "辅弼",
	refubi_info: "游戏开始时，你可令一名其他角色获得“辅弼”标记。有“辅弼”标记的角色的准备阶段开始时，你可选择一项：①令其本回合使用【杀】的次数上限+1。②令其本回合的手牌上限+3。",
	rezuici: "罪辞",
	rezuici_backup: "罪辞",
	rezuici_info: "出牌阶段，或当你处于濒死状态时，你可以废除一个有牌的装备栏并回复2点体力，然后可以移动“辅弼”标记。",
	mjdingyi: "定仪",
	mjdingyi_info: "游戏开始时，你选择一个效果（相同效果不可叠加）并令全场角色获得之：①摸牌阶段额定摸牌数+1。②手牌上限+2。③攻击范围+1。④脱离濒死状态时回复1点体力。",
	mjzuici: "罪辞",
	mjzuici_info: "当你受到伤害后，你可令伤害来源失去〖定仪〗效果，然后令其从牌堆中获得一张由你选择的智囊。",
	mjfubi: "辅弼",
	mjfubi_info: "每轮限一次。出牌阶段，你可选择一项：①更换一名角色的〖定仪〗效果。②弃置一张牌并令一名角色的〖定仪〗效果翻倍直到你的下回合开始。",
	wujing: "吴景",
	heji: "合击",
	heji_info: "当有角色使用的【决斗】或红色【杀】结算完成后，若此牌对应的目标数为1，则你可以对相同的目标使用一张【杀】或【决斗】（无距离和次数限制）。若你以此法使用的牌不为转化牌，则你从牌堆中随机获得一张红色牌。",
	liubing: "流兵",
	liubing_info: "锁定技。①你于出牌阶段使用的第一张非虚拟【杀】的花色视为♦。②其他角色于其出牌阶段内使用的非转化黑色杀结算结束后，若此【杀】未造成伤害，则你获得之。",
	sp_mifuren: "手杀糜夫人",
	spcunsi: "存嗣",
	spcunsi2: "存嗣",
	spcunsi_info: "出牌阶段限一次，你可将武将牌翻至背面并选择一名其他角色。其从牌堆或弃牌堆中获得一张【杀】，且下一张杀的伤害值基数+1。",
	spguixiu: "闺秀",
	spguixiu_info: "锁定技，当你受到伤害后，若你的武将牌背面朝上，则你将武将牌翻至正面。当你的武将牌从背面翻至正面时，你摸一张牌。",
	qingyu: "清玉",
	qingyu_info: "使命技。①当你受到伤害时，你弃置两张牌，然后防止此伤害。②使命：准备阶段，若你的体力值等于体力上限且你没有手牌，则你获得〖悬存〗。③失败：当你进入濒死状态时，你减1点体力上限。",
	xuancun: "悬存",
	xuancun_info: "其他角色的回合结束时，若你的手牌数小于体力值，则你可以令其摸X张牌（X为你的体力值与手牌数之差且至多为2）。",
	xinlirang: "礼让",
	xinlirang_info: "①其他角色的摸牌阶段开始时，若你没有“谦”标记，则你可以获得一枚“谦”标记。若如此做，其额定摸牌数+2，且本回合的弃牌阶段开始时，你可以获得其弃置的至多两张牌。②摸牌阶段开始时，若你有“谦”标记，则你跳过此摸牌阶段并移除“谦”标记。",
	xinmingshi: "名仕",
	xinmingshi_info: "锁定技，当你受到伤害后，若你有“谦”标记，则伤害来源弃置一张牌。若此牌为：黑色：你获得之。红色，你回复1点体力。",
	sp_xinpi: "手杀辛毗",
	spyinju: "引裾",
	spyinju2: "引裾",
	spyinju_info: "出牌阶段限一次，你可令一名其他角色选择一项：①对你使用一张【杀】（无距离限制）。②其下个回合的准备阶段开始时，跳过出牌阶段和弃牌阶段。",
	spchijie: "持节",
	spchijie_info: "每回合限一次。当你成为其他角色使用牌的唯一目标时，你可判定。若结果大于6，则你取消此牌的所有目标。",
	reduoji: "夺冀",
	reduoji_info: "出牌阶段限一次，你可将一张牌置于其他角色的武将牌上，称为“冀”。当有装备牌因使用而进入一名角色的装备区后，若该角色有“冀”且其为使用者，则你获得此装备牌，其移去一个“冀”并摸一张牌。一名其他角色的回合结束后，若其有“冀”，则你获得其的所有“冀”。",
	wangling: "手杀王淩",
	wangling_prefix: "手杀",
	mouli: "谋立",
	mouli_info: "出牌阶段限一次，你可以将一张手牌交给一名其他角色，其获得如下效果直到你的下回合开始：其可以将黑色牌当做【杀】，红色牌当做【闪】使用。其第一次触发“使用【杀】/【闪】结算完成后”的时机时，你摸三张牌。",
	zifu: "自缚",
	zifu_info: "锁定技，当有角色死亡时，若其因你获得的“谋立”效果未过期，则你减2点体力上限。",
	xingqi: "星启",
	xingqi_info: "①当你使用牌时，若此牌不为延时锦囊牌且你没有同名的“备”，则你获得一枚与此牌名称相同的“备”。②结束阶段，你可移去一枚“备”，然后从牌堆中获得一张与此“备”名称相同的牌。",
	xinzifu: "自缚",
	xinzifu_info: "锁定技。出牌阶段结束时，若你本阶段内未使用牌，则你移去所有“备”且本回合的手牌上限-1。",
	mibei: "秘备",
	mibei_info: "使命技。①使命：当你使用的牌结算完成后，若你的“备”中包含的基本牌，锦囊牌，装备牌数量均大于1，则你从牌堆中获得这三种类型的牌各一张并获得技能“谋立”。②失败：结束阶段开始时，若你没有“备”，且你于本回合的准备阶段开始时也没有“备”，则你减1点体力上限。",
	xinmouli: "谋立",
	xinmouli_info: "出牌阶段限一次，你可以指定一名其他角色。其移去你的一个“备”，然后从牌堆中获得一张与此“备”名称相同的牌。",
	wangfuzhaolei: "王甫赵累",
	xunyi: "殉义",
	xunyi2: "殉义",
	xunyi3: "殉义",
	xunyi_info: "游戏开始时，或当上一个拥有“殉义”效果的角色死亡后，你可以选择一名角色获得如下效果：当其/你对二者之外的角色造成伤害后，你/其摸一张牌；当其/你受到二者之外的角色造成的伤害后，你/其弃置一张牌。",
	zhouchu: "手杀周处",
	xianghai: "乡害",
	xianghai_info: "锁定技，其他角色的手牌上限-1。你手牌区的装备牌均视为【酒】。",
	chuhai: "除害",
	chuhai_info: "出牌阶段限一次，你可以摸一张牌，然后和一名其他角色拼点。若你赢，则你观看其手牌，并从牌堆/弃牌堆中获得其手牌中包含的类型的牌各一张，且当你于此阶段内对其造成伤害后，你将牌堆/弃牌堆中的一张装备牌置于你的一个空置装备栏内。",
	rechuhai: "除害",
	rechuhai_info: "使命技。①出牌阶段限一次，你可以摸一张牌，然后和一名其他角色拼点。若你赢，则你观看其手牌，并从牌堆/弃牌堆中获得其手牌中包含的类型的牌各一张，且当你于此阶段内对其造成伤害后，你将牌堆/弃牌堆中的一张装备牌置于你的一个空置装备栏内。②当你因发动〖除害①〗而展示拼点牌时，你令此牌的点数+X（X=(4-你装备区的牌数)）。③使命：当有装备牌进入你的装备区后，若你的装备区内有至少三张牌，则你将体力值回复至上限，失去〖乡害〗并获得〖彰名〗。④失败：当你因发动〖除害①〗发起的拼点没赢时，若你的最终点数不大于6，则你触发使命失败分支。",
	zhangming: "彰名",
	zhangming_info: "锁定技。①你使用的♣牌不能被其他角色响应。②每回合限一次，当你对其他角色造成伤害后，你随机弃置其一张手牌，然后你从牌堆或弃牌堆中获得与其展示牌类型不同类型的牌各一张（若其没有手牌，则你改为从牌堆或弃牌堆中获得所有类型牌各一张），且以此法得到的牌不计入本回合的手牌上限。",
	sp_kongrong: "手杀孔融",
	spmingshi: "名士",
	spmingshi_info: "锁定技，当你受到1点伤害后，伤害来源弃置一张牌。",
	splirang: "礼让",
	splirang_info: "出牌阶段限一次，你可以弃置所有手牌，然后将其中的至多X张牌交给一名其他角色（X为你的体力值），之后摸一张牌。",
	caizhenji: "蔡贞姬",
	sheyi: "舍裔",
	sheyi_info: "每轮限一次。当有体力值小于你的其他角色受到伤害时，你可以交给其至少X张牌并防止此伤害（X为你的体力值）。",
	tianyin: "天音",
	tianyin_info: "锁定技，结束阶段开始时，你从牌堆中获得每种本回合未使用过的类型的牌各一张。",
	xiangchong: "向宠",
	guying: "固营",
	guying_info: "锁定技。每回合限一次，当你于回合外因使用/打出/弃置而失去牌后，若牌数为1，则你获得一枚“固”并令当前回合角色选择一项：①随机交给你一张牌。②令你获得本次失去的牌，若为装备牌，则你使用之。准备阶段开始时，你移去所有“固”并弃置等量的牌。",
	muzhen: "睦阵",
	muzhen_backup: "睦阵",
	muzhen_info: "出牌阶段各限一次。①你可以将两张牌交给一名装备区内有牌的其他角色，然后获得其装备区内的一张牌。②你可以将装备区内的一张牌置于其他角色的装备区内，然后获得其一张手牌。",
	sp_huaxin: "手杀华歆",
	hxrenshi: "仁仕",
	hxrenshi_info: "出牌阶段每名角色限一次。你可以将一张手牌交给一名其他角色。",
	debao: "德保",
	debao_info: "锁定技，当其他角色获得你的牌后，若你的“仁”数小于你的体力上限，则你将牌堆顶的一张牌置于你的武将牌上，称为“仁”。准备阶段，你获得所有“仁”。",
	buqi: "不弃",
	buqi_info: "锁定技，当有角色进入濒死状态时，若你的“仁”数大于1，则你移去两张“仁”并令其回复1点体力。一名角色死亡后，你将所有“仁”置入弃牌堆。",
	yuanqing: "渊清",
	yuanqing_info: "锁定技，出牌阶段结束时，你随机将弃牌堆中你本阶段使用过的牌类型的各一张牌置于仁库中。",
	shuchen: "疏陈",
	shuchen_info: "锁定技，当有角色进入濒死状态时，若仁库中的牌数大于三，则你获得仁库中的所有牌，然后其回复1点体力。",
	sp_xujing: "手杀许靖",
	boming: "博名",
	boming_info: "出牌阶段限两次，你可以将一张牌交给一名其他角色。结束阶段，若你本回合以此法失去了两张以上的牌，则你摸一张牌。",
	ejian: "恶荐",
	ejian_info: "锁定技，每名角色限一次。当有其他角色因〖博名〗而得到了你的牌后，若其拥有与此牌类型相同的其他牌，则你令其选择一项：①受到1点伤害。②展示所有手牌，并弃置所有与此牌类别相同的牌。",
	zhangzhongjing: "张机",
	jishi: "济世",
	jishi_info: "锁定技。①当你使用的牌结算完成后，若你未因此牌造成过伤害，则你将此牌对应的所有实体牌置于仁库中。②当有牌不因溢出而离开仁库时，你摸一张牌。",
	liaoyi: "疗疫",
	liaoyi_info: "其他角色的回合开始时，若其：①手牌数小于体力值且仁库内牌数大于等于X，则你可令其从仁库中获得X张牌；②手牌数大于体力值，则你可以令其将X张牌置于仁库中（X为其手牌数与体力值之差且至多为4）。",
	xinliaoyi: "疗疫",
	xinliaoyi_info: "其他角色的回合开始时，你可选择一项：①令其从仁库中获得一张牌。②若其手牌数大于体力值，则令其将X张手牌置入仁库（X为其手牌数与体力值之差）。",
	binglun: "病论",
	binglun_info: "出牌阶段限一次，你可以将仁库中的一张牌置于弃牌堆并选择一名角色。该角色选择一项：①摸一张牌。②于其下回合结束时回复1点体力。",
	sp_zhangwen: "手杀张温",
	gebo: "戈帛",
	gebo_info: "锁定技，当有角色回复体力后，你将牌堆顶的一张牌置入仁库。",
	spsongshu: "颂蜀",
	spsongshu_info: "其他角色的摸牌阶段开始时，若其体力值大于你且仁库内有牌，则你可以令其放弃摸牌。其改为获得X张仁（X为你的体力值且至多为5），且本回合内不能使用牌指定其他角色为目标。",
	liuzhang: "刘璋",
	xiusheng: "休生",
	xiusheng_info: "锁定技。准备阶段，你将所有“生”置入弃牌堆，然后摸X张牌，并将等量的牌置于武将牌上，称为“生”（X为你因〖引狼〗而选择的势力的存活角色数）。",
	yinlang: "引狼",
	yinlang_info: "①每轮限一次。回合开始时，你选择场上的一个势力。②一名角色的出牌阶段开始时，若其势力与你选择的势力相同，则其选择一项：1.获得你的一张“生”，然后其本回合使用牌时不能指定你以外的角色为目标。2.你获得一张“生”。",
	huaibi: "怀璧",
	huaibi_info: "主公技，锁定技。你的手牌上限+X（X为你因〖引狼〗而选择的势力的存活角色数）。",
	jutu: "据土",
	jutu_info: "锁定技，准备阶段，你获得所有你武将牌上的“生”，然后摸X+1张牌，然后将X张牌置于你的武将牌上，称为“生”（X为你因〖邀虎〗选择势力的角色数量)。",
	yaohu: "邀虎",
	yaohu_info: "每轮限一次，你的回合开始时，你须选择场上一个势力。该势力其他角色的出牌阶段开始时，其获得你的一张“生”，然后其须选择一项：①对你指定的另一名的其他角色使用一张【杀】（无距离和次数限制）；②交给你两张牌。",
	rehuaibi: "怀璧",
	rehuaibi_info: "主公技，锁定技，你的手牌上限+X（X为你因〖邀虎〗选择势力的角色数量)。",
	qiaogong: "桥公",
	yizhu: "遗珠",
	yizhu_info: "①结束阶段，你摸两张牌，然后将两张牌随机插入牌堆前2X张牌的位置中（X为角色数，选择牌的牌名对其他角色可见）。②其他角色使用“遗珠”牌指定唯一目标时，你可以取消此目标，然后你清除对应的“遗珠”标记。",
	luanchou: "鸾俦",
	luanchou_info: "出牌阶段限一次，你可令两名角色获得“姻”标记并清除原有标记。拥有“姻”标记的角色视为拥有技能〖共患〗。",
	gonghuan: "共患",
	gonghuan_info: "锁定技。每回合限一次，一名其他角色受到伤害时，若其拥有“姻”标记且其体力值小于你，则你将伤害转移给自己。此伤害结算结束后，你与其移去“姻”标记。",
	sp_yanghu: "手杀羊祜",
	mingfa: "明伐",
	mingfa_info: "①结束阶段，你可展示一张牌并记录为“明伐”。②出牌阶段开始时，若“明伐”牌在你的手牌区或装备区，则你可以使用“明伐”牌与一名其他角色拼点。若你赢：你获得对方一张牌并从牌堆中获得一张点数等于“明伐”牌牌面点数-1的牌。若你没赢：你本回合不能使用牌指定其他角色为目标。③你的拼点牌亮出后，你令此牌的点数+2。",
	rongbei: "戎备",
	rongbei_info: "限定技。出牌阶段，你可选择一名有空装备栏的角色。系统为该角色的每个空装备栏选择一张装备牌，然后该角色使用之。",
	db_wenyang: "手杀文鸯",
	dbquedi: "却敌",
	dbquedi_info: "每回合限一次。当你使用【杀】或【决斗】指定唯一目标后，你可选择：①获得目标角色的一张手牌。②弃置一张基本牌，并令此牌的伤害值基数+1。③背水：减1点体力上限，然后依次执行上述所有选项。",
	dbzhuifeng: "椎锋",
	dbzhuifeng_info: "魏势力技。每回合限两次，你可以失去1点体力并视为使用一张【决斗】（你死亡后仍然结算）。当你因此【决斗】而受到伤害时，你防止此伤害并令此技能失效直到出牌阶段结束。",
	dbchongjian: "冲坚",
	dbchongjian_backup: "冲坚",
	dbchongjian_info: "吴势力技。你可以将一张装备牌当做一种【杀】（无距离限制且无视防具）或【酒】使用。当你以此法使用【杀】造成伤害后，你获得目标角色装备区内的X张牌（X为伤害值）。",
	dbchoujue: "仇决",
	dbchoujue_info: "锁定技。当你杀死其他角色后，你加1点体力上限并摸两张牌，然后本回合发动【却敌】的次数上限+1。",
	sp_chendong: "手杀陈武董袭",
	sp_chendong_prefix: "手杀",
	spyilie: "毅烈",
	spyilie_info: "出牌阶段开始时，你可选择：①本阶段内使用【杀】的次数上限+1。②本回合内使用【杀】被【闪】抵消时，摸一张牌。③背水：失去1点体力，然后依次执行上述所有选项。",
	spfenming: "奋命",
	spfenming_info: "出牌阶段限一次，你可以选择一名体力值不大于你的角色。若其：未横置，其横置；已横置，你获得其一张牌。",
	yuanhuan: "袁涣",
	qingjue: "请决",
	qingjue_info: "每轮限一次。当有其他角色A使用牌指定另一名体力值小于A且不处于濒死状态的其他角色B为目标时，你可以摸一张牌，然后与A拼点。若你赢，你取消此目标。若你没赢，你将此牌的目标改为自己。",
	fengjie: "奉节",
	fengjie2: "奉节",
	fengjie_info: "锁定技，准备阶段开始时，你选择一名其他角色并获得如下效果直到你下回合开始：一名角色的结束阶段开始时，你将手牌摸至（至多摸四张）或弃置至与其体力值相等。",
	sp_zongyu: "手杀宗预",
	zhibian: "直辩",
	zhibian_info: "准备阶段，你可以和一名其他角色拼点。若你赢，你可选择：①将其装备区/判定区内的一张牌移动到你的对应区域。②回复1点体力。③背水：跳过下个摸牌阶段，然后依次执行上述所有选项；若你没赢，你失去1点体力。",
	yuyan: "御严",
	yuyan_info: "锁定技。当你成为非转换的【杀】的目标时，若使用者的体力值大于你且此【杀】有点数，则你令使用者选择一项：①交给你一张点数大于此【杀】的牌。②取消此目标。",
	sp_wangshuang: "手杀王双",
	yiyong: "异勇",
	yiyong_info: "当你受到其他角色造成的渠道为【杀】的伤害后，若你的装备区内有武器牌，则你可以获得此【杀】对应的所有实体牌，然后将这些牌当做【杀】对伤害来源使用（无距离限制）。若其装备区内没有武器牌，则此伤害+1。",
	shanxie: "擅械",
	shanxie_info: "①出牌阶段限一次，你可从牌堆中获得一张武器牌。若牌堆中没有武器牌，则你改为随机获得一名角色装备区内的一张武器牌。②当其他角色使用【闪】响应你使用的【杀】时，若此【闪】没有点数或点数不大于你攻击范围的二倍，则你令此【闪】无效。",
	shanxie_info_old: "①出牌阶段限一次，你可选择一项：⒈从牌堆中获得一张武器牌。⒉获得一名其他角色装备区内的一张武器牌并使用，然后其将一张手牌当做【杀】对你使用。②当其他角色使用【闪】响应你使用的【杀】时，若此【闪】没有点数或点数不大于你攻击范围的二倍，则你令此【闪】无效。",
	sunyi: "手杀孙翊",
	zaoli: "躁厉",
	zaoli_info: "锁定技。①你不能于回合内使用或打出你手牌中不为本回合得到的牌。②当你使用或打出手牌时，你获得一个“厉”（至多4个）。③回合开始时，若你有“厉”，则你移去所有“厉”并弃置任意张牌，然后摸X+Y张牌。若X大于2，你失去1点体力（X为你移去的标记数，Y为你弃置的牌数）。",
	sp_gaolan: "手杀高览",
	spjungong: "峻攻",
	spjungong_info: "出牌阶段，你可失去X+1点体力或弃置X+1张牌，视为对一名其他角色使用【杀】（不计入次数和距离限制，X为你本回合内发动过〖峻攻〗的次数）。若你因此【杀】造成了伤害，则你令此技能失效直到回合结束。",
	spdengli: "等力",
	spdengli_info: "当你使用【杀】指定目标后，或成为【杀】的目标后，若使用者和目标的体力值相等，则你摸一张牌。",
	sp_huaman: "手杀花鬘",
	spxiangzhen: "象阵",
	spxiangzhen_info: "锁定技。①【南蛮入侵】对你无效。②当有角色使用的【南蛮入侵】结算结束后，若有角色因此牌受到过伤害，则你和使用者各摸一张牌。",
	spfangzong: "芳踪",
	spfangzong_info: "锁定技。①你不能于回合内使用具有伤害标签的牌指定攻击范围内的角色为目标。②攻击范围内包含你的角色不能使用具有伤害标签的牌指定你为目标。③结束阶段，你将手牌摸至X张（X为场上存活人数且至多为8）。",
	spxizhan: "嬉战",
	spxizhan_info: "其他角色的回合开始时，你须选择一项：①失去1点体力。②弃置一张牌并令〖芳踪〗于本回合失效，然后若此牌的花色为：♠，其视为使用一张【酒】；♥，你视为使用一张【无中生有】；♣，你视为对其使用【铁索连环】；♦：你视为对其使用火【杀】（无距离限制）。",
	sp_cuiyan: "手杀崔琰",
	spyajun: "雅俊",
	spyajun_info: "①摸牌阶段，你令额定摸牌数+1。②出牌阶段开始时，你可以用一张本回合得到的牌与其他角色拼点。若你赢，则你可将其中一张拼点牌置于牌堆顶。若你没赢，你本回合的手牌上限-1。",
	spzundi: "尊嫡",
	spzundi_info: "出牌阶段限一次，你可以弃置一张手牌并选择一名角色，然后你进行判定。若结果为：黑色，其摸三张牌；红色，其可以移动场上的一张牌。",
	sp_zhangchangpu: "手杀张昌蒲",
	spdifei: "抵诽",
	spdifei_info: "锁定技。每回合限一次，当你受到伤害后，你摸一张牌或弃置一张手牌，然后展示所有手牌。若此伤害的渠道为没有花色的牌或你的手牌中没有与此牌花色相同的牌，则你回复1点体力。",
	spyanjiao: "严教",
	spyanjiao_info: "出牌阶段限一次。你可以将手牌中一种花色的所有牌交给一名其他角色，对其造成1点伤害。然后你于自己的下回合开始时摸等量的牌。",
	sp_jiangwan: "蒋琬",
	spzhenting: "镇庭",
	spzhenting_info: "每回合限一次。当你攻击范围内的角色成为【杀】或延时锦囊的目标时，若你不是此牌的使用者且不是此牌的目标，则你可以将此目标改为自己。然后你选择一项：①弃置使用者的一张手牌。②摸一张牌。",
	spjincui: "尽瘁",
	spjincui_info: "限定技。出牌阶段，你可以和一名其他角色交换位置，然后失去X点体力（X为你的体力值）。",
	sp_jiangqing: "蒋钦",
	spjianyi: "俭衣",
	spjianyi_info: "锁定技。其他角色的回合结束时，若弃牌堆中有于本回合内因弃置而进入弃牌堆的防具牌，则你获得其中一张。",
	spshangyi: "尚义",
	spshangyi_info: "出牌阶段限一次。你可以弃置一张牌并选择一名其他角色。其观看你的手牌，然后你观看其手牌并获得其中的一张。",
	sp_lvfan: "手杀吕范",
	sp_lvfan_prefix: "手杀",
	spdiaodu: "调度",
	spdiaodu_info: "准备阶段，你可令一名角色摸一张牌，然后移动其装备区内的一张牌。",
	spdiancai: "典财",
	spdiancai_info: "其他角色的结束阶段开始时，你可以令至多X名角色各摸一张牌（X为你本回合失去的手牌数）。",
	mbdiaodu: "调度",
	mbdiaodu_info: "准备阶段，你可以移动一名角色装备区内的一张牌（不能移动给自己），然后其摸一张牌。",
	mbdiancai: "典财",
	mbdiancai_info: "其他角色的出牌阶段阶段结束后，若你本阶段失去的牌数不小于你的体力值，则你可将手牌数补至体力上限。",
	spyanji: "严纪",
	spyanji_info: "出牌阶段开始时，你可以进行“整肃”。",
	sp_huangfusong: "手杀皇甫嵩",
	spzhengjun: "整军",
	spzhengjun_info: "①出牌阶段开始时，你可进行“整肃”。②当你因整肃而摸牌或回复体力后，你可令一名其他角色摸两张牌或回复1点体力。",
	spshiji: "势击",
	spshiji_info: "当你对其他角色造成属性伤害时，若你的手牌数不为全场唯一最多，则你可以观看其手牌。你令其弃置其中的所有红色牌，然后摸等量的牌。",
	sptaoluan: "讨乱",
	sptaoluan_info: "每回合限一次。一名角色的判定结果确定时，若结果的花色为♠，则你可以终止导致此判定发生的上级事件。然后选择一项：①获得判定牌对应的实体牌。②视为对判定角色使用一张火【杀】（无距离和次数限制）。",
	sp_zhujun: "手杀朱儁",
	yangjie: "佯解",
	yangjie_info: "出牌阶段限一次，你可以摸一张牌并和一名其他角色A拼点。当你以此法展示你的拼点牌时，你令此牌点数-X（X为你已损失的体力值）。若你没赢，则你可以令另一名其他角色B获得两张拼点牌，然后其视为对A使用一张火【杀】。",
	zjjuxiang: "拒降",
	zjjuxiang_info: "限定技。一名其他角色脱离濒死状态时，你可以对其造成1点伤害，然后摸X张牌（X为其体力上限且至多为5）。",
	xinyangjie: "佯解",
	xinyangjie_info: "出牌阶段限一次，你可以与一名其他角色A拼点。若你没赢，则你可以令另一名其他角色B视为对A使用一张火【杀】。",
	xinjuxiang: "拒降",
	xinjuxiang_info: "限定技，一名其他角色脱离濒死状态时，你可以对其造成1点伤害。",
	houfeng: "厚俸",
	houfeng_info: "每轮限一次。一名其他角色的出牌阶段开始时，若其在你的攻击范围内，则你可以令其进行“整肃”。然后当其于本回合内因整肃而摸牌或回复体力后，你获得相同的整肃奖励。",
	liuba: "手杀刘巴",
	duanbi: "锻币",
	duanbi_info: "限定技。出牌阶段，若场上所有角色的手牌数之和大于角色数之和的二倍，则你可以令所有其他角色各弃置X张手牌（X为该角色手牌数的一半且向下取整且至多为3）。然后你可选择一名角色，令其随机获得三张以此法被弃置的牌。",
	tongduo: "统度",
	tongduo_info: "每回合限一次。当你成为其他角色使用牌的唯一目标后，你可令一名角色重铸一张牌。",
};

export default translates;
