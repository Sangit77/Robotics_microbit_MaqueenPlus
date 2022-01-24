let L1 = 0
let R1 = 0
basic.forever(function () {
    L1 = DFRobotMaqueenPlus.readPatrol(Patrol.L1)
    R1 = DFRobotMaqueenPlus.readPatrol(Patrol.R1)
    if (L1 == 1 && R1 == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else if (L1 == 0 && R1 == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
    } else if (L1 == 1 && R1 == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 50)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
    } else if (L1 == 0 && R1 == 0) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
