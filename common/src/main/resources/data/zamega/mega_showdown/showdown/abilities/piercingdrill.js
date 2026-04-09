{
	onModifyMove(move) {
		if (move.flags['contact']) {
			delete move.flags['protect'];
			move.onBasePowerPriority = 10;
			move.onBasePower = function (basePower, pokemon, target) {
				if (target.volatiles['protect'] || target.side.sideConditions['quickguard'] || target.side.sideConditions['wideguard']) {
					return this.chainModify(0.25);
				}
			};
		}
	},
	flags: {},
	name: "Piercing Drill",
	rating: 2.5,
	num: 206
}