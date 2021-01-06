# oscilloscope

# Brief about important files in project

1. _index_
	File extension : HTML
	Its the Html file which have all contents that appear in the web page ,
	it must be included to load the page and acts as the oscilloscope live stream page

2. _index_
	File extension : JS
	Its the backend code which is used to read values came from COM port (proteus simulation) and send it to the
  frontend page to plot it.

3. _sampling_
	File extension : ino
	The ardiono code which is used to sample the signal usind analog to digital converter (ADC) and send it through th
  virtual port to the backend code .

4. _Oscilloscope_
    File extension : pdsprj
    proteus simulation file which must be open using proteus 8.6 or Higher .


# How to run the project.

	1. put all the files in the same folder on the same location
  2. download needed packages in  web app folder (npm install ...) 
	3. download a virtual port application i recommend VSPE app .
	4. connect the port (COM1) using VSPE
  5. using cmd go to web file location and write node index.js to start the server
 
