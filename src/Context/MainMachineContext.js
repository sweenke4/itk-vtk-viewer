class MainMachineContext {
  // Background color of the renderer
  backgroundColor = [0.5, 0.5, 0.5]

  // Is fullscreen mode enabled?
  fullscreenEnabled = false

  // Are annotations, e.g. pixel values, an orientation widget, displayed?
  annotationsEnabled = true

  // Continuously rotate the 3D rendering?
  rotateEnabled = false

  // Visualize the spatial axes on the viewable scene content
  axesEnabled = false

  // Enable interpolation on slicing planes
  interpolationEnabled = true

  // Spatial length units displayed in the scale bar
  units = ''
}

export default MainMachineContext
