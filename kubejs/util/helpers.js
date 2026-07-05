const getPosSanitized = (position) => {
    return {
        x: Math.round(position.x()),
        y: Math.round(position.y()),
        z: Math.round(position.z())
    }
}