   
    var camera = [15, 16, 16,    0, 0, -1,    45]; // (x, y, z) position, (x, y, z) normal vector, field of view
   
    var lights = [
		// Number of lights - unused
		1, 
		
		// (x, y, z) coordinates, (r, g, b) color
		15, 16, 14,    1, 1, 1,
	];

    var number_of_lights = lights[0];
	var light_skip = 7;

    var objects = [
		// Number of spheres - unused
		3,
		
		// Object Type, smoothness, (r, g, b) colors, (spec, diff, amb, opac), (x, y, z) position, radius, 
        ObjTyp.SPHERE,   10,        0.05, 0.25, 0.9,  1.0, 0.4, 0.5, 0.7,      15, 16, 8.5,        1,    
        ObjTyp.SPHERE,   10,        1.0, 0.05, 0.05,  0.7, 0.4, 0.6, 1.0,      15, 14, 8.5,        0.4,               
		ObjTyp.SPHERE,   10,        1.0, 1.0, 0.1,    0.7, 0.4, 0.6, 1.0,      15, 16, 10.5,       0.2           
    ];
   
   var number_of_objects = objects[0];
   var object_skip = 13;
   
   var dist_to_center = 7.5;
   
   var all_rotational_centers = [[15, 16, 8.5], [15, 16, 8.5], [15, 16, 8.5]];
   
   