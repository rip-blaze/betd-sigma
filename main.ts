basic.forever(function () {
    if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 30)
        neZha.setMotorSpeed(neZha.MotorList.M2, 30)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 30)
        neZha.setMotorSpeed(neZha.MotorList.M2, 18)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 18)
        neZha.setMotorSpeed(neZha.MotorList.M2, 30)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 30)
        neZha.setMotorSpeed(neZha.MotorList.M2, 18)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_1) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, 18)
        neZha.setMotorSpeed(neZha.MotorList.M2, 30)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M2, 30)
        neZha.setMotorSpeed(neZha.MotorList.M1, -15)
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M2, -15)
        neZha.setMotorSpeed(neZha.MotorList.M1, 30)
    }
})
