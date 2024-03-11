import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const GrowthIcon = () => {

	const [ref, inView] = useInView({
		triggerOnce: true, // Animation triggers only once
		threshold: 0.5, // Trigger animation when 50% of the SVG is in view
	  });
	  
	
	return (
		<motion.svg
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    width="100%"
    viewBox="0 0 912 408"
    enable-background="new 0 0 912 408"
	ref={ref}
	initial={{opacity: 0}}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 1, delay: 0.5 }}
  >
    <motion.path
      fill="transparent"
      opacity="1.000000"
      stroke="none"
      d="
M573.000000,409.000000 
	C382.000031,409.000000 191.500061,409.000000 1.000077,409.000000 
	C1.000051,273.000061 1.000051,137.000122 1.000026,1.000131 
	C304.999878,1.000088 608.999756,1.000088 912.999756,1.000044 
	C912.999817,136.999863 912.999817,272.999725 912.999878,408.999817 
	C799.833313,409.000000 686.666687,409.000000 573.000000,409.000000 
M702.420837,165.067856 
	C705.982727,166.912994 709.369446,169.314407 713.138489,170.501862 
	C725.846680,174.505600 744.505981,161.797348 743.686218,148.772873 
	C743.063965,138.886566 746.356567,133.070236 755.008728,129.425400 
	C756.327515,128.869812 757.387939,127.721542 758.607605,126.906929 
	C789.690735,106.146576 820.781372,85.397591 851.860962,64.631920 
	C853.742188,63.374943 855.019592,63.090271 857.412048,64.571106 
	C864.768860,69.124641 872.575439,70.482117 881.200073,67.147926 
	C891.968872,62.984844 899.846008,50.633514 897.958679,39.378857 
	C895.932251,27.294880 884.933228,17.399797 873.503174,16.963017 
	C855.330261,16.268560 842.805969,32.609772 846.889648,50.133839 
	C846.821350,50.285835 846.796143,50.502625 846.678711,50.580700 
	C811.267822,74.122696 775.795715,97.573532 740.512329,121.304863 
	C736.682739,123.880569 734.166443,123.901390 729.885254,122.195992 
	C714.968018,116.253860 700.127808,120.177856 693.799988,137.623047 
	C692.760986,140.487717 691.748535,142.174820 688.023926,142.111725 
	C656.697266,141.581039 625.365356,141.362869 594.037415,140.894760 
	C592.619568,140.873566 590.840088,139.669647 589.878845,138.488022 
	C582.267639,129.131546 573.188293,124.081863 560.650513,126.945076 
	C552.056702,128.907623 543.101990,138.627090 541.905457,147.476517 
	C541.310852,151.874252 541.225647,156.199020 535.999512,159.219238 
	C520.933533,167.925903 506.395264,177.547180 491.665863,186.834763 
	C476.878632,196.158783 462.110809,205.513550 447.366150,214.834808 
	C438.950623,206.036789 428.932587,203.721924 418.216492,207.490616 
	C407.180267,211.371902 402.033295,220.533051 400.642639,231.846832 
	C373.327454,231.846832 346.361053,231.846832 320.779144,231.846832 
	C317.421204,227.515961 315.033844,223.572311 311.826385,220.479080 
	C305.026093,213.920914 296.798309,211.316238 287.533630,214.242661 
	C278.359955,217.140366 271.766296,223.185623 269.371521,232.600388 
	C268.294342,236.835068 269.289429,241.559952 268.904236,246.024445 
	C268.734131,247.996063 267.988617,250.454834 266.607422,251.687668 
	C261.861328,255.923996 256.745117,259.749878 251.722275,263.671082 
	C238.330475,274.125763 224.826675,284.439484 211.552826,295.041443 
	C206.694519,298.921844 202.634384,301.695221 195.635590,298.690247 
	C191.210831,296.790436 184.907150,297.312775 180.052826,298.769775 
	C169.591644,301.909637 163.265091,311.513489 163.067612,322.650909 
	C163.017487,325.478119 162.176300,326.838226 159.345367,327.395721 
	C155.199982,328.212097 151.122665,329.384399 147.030273,330.458099 
	C122.208565,336.970551 97.373268,343.433014 72.598915,350.121155 
	C70.125771,350.788757 68.777382,350.485626 67.128525,348.700592 
	C60.656151,341.693787 52.662125,339.215118 43.276630,340.987671 
	C34.519932,342.641510 28.477221,347.856171 25.070105,355.751556 
	C20.930466,365.344482 21.992626,374.780823 28.598600,383.000763 
	C35.480057,391.563477 44.880604,393.896118 55.172478,391.242493 
	C66.483353,388.326080 72.588356,380.461761 74.064125,368.870361 
	C74.373253,366.442322 74.788704,364.269806 78.417465,363.655701 
	C84.952278,362.549774 91.303749,360.366547 97.736725,358.651764 
	C119.722733,352.791168 141.697296,346.886505 163.716217,341.152100 
	C166.316757,340.474823 168.685074,340.133484 171.514206,342.701721 
	C183.462646,353.548492 202.632065,350.189758 210.874405,336.426117 
	C214.879013,329.738983 214.075729,322.516510 213.832947,315.281128 
	C213.785706,313.872925 214.152634,311.876526 215.103409,311.098907 
	C223.591522,304.156830 232.238419,297.408051 240.867889,290.639771 
	C253.568604,280.678284 266.293396,270.747498 278.874786,260.907776 
	C294.373352,269.316833 311.689453,264.758179 318.573456,249.139847 
	C319.216278,247.681503 321.678589,246.144302 323.306732,246.132675 
	C349.467194,245.945694 375.629547,245.962524 401.790771,246.087006 
	C403.523590,246.095230 405.717407,246.882217 406.903442,248.087616 
	C413.937378,255.236649 421.888885,258.889526 432.232239,257.092102 
	C443.521271,255.130310 452.288818,244.980072 452.922333,233.021530 
	C453.077240,230.097519 453.810425,228.343460 456.468262,226.689301 
	C476.493317,214.226318 496.378937,201.539200 516.300903,188.910690 
	C526.720886,182.305496 537.126343,175.677322 547.450562,169.115311 
	C561.676819,183.623901 585.821655,181.186203 593.699890,155.998978 
	C595.444275,155.998978 597.266174,155.998993 599.088074,155.998993 
	C628.082703,155.998993 657.077515,156.058716 686.071655,155.942169 
	C691.103577,155.921951 695.802551,155.635193 698.145081,161.468597 
	C698.704224,162.860901 700.489014,163.761002 702.420837,165.067856 
z"
    />
    <motion.path
      fill="#ffd027"
      opacity="1.000000"
      stroke="none"
      d="
M702.065430,164.977676 
	C700.489014,163.761002 698.704224,162.860901 698.145081,161.468597 
	C695.802551,155.635193 691.103577,155.921951 686.071655,155.942169 
	C657.077515,156.058716 628.082703,155.998993 599.088074,155.998993 
	C597.266174,155.998993 595.444275,155.998978 593.699890,155.998978 
	C585.821655,181.186203 561.676819,183.623901 547.450562,169.115311 
	C537.126343,175.677322 526.720886,182.305496 516.300903,188.910690 
	C496.378937,201.539200 476.493317,214.226318 456.468262,226.689301 
	C453.810425,228.343460 453.077240,230.097519 452.922333,233.021530 
	C452.288818,244.980072 443.521271,255.130310 432.232239,257.092102 
	C421.888885,258.889526 413.937378,255.236649 406.903442,248.087616 
	C405.717407,246.882217 403.523590,246.095230 401.790771,246.087006 
	C375.629547,245.962524 349.467194,245.945694 323.306732,246.132675 
	C321.678589,246.144302 319.216278,247.681503 318.573456,249.139847 
	C311.689453,264.758179 294.373352,269.316833 278.874786,260.907776 
	C266.293396,270.747498 253.568604,280.678284 240.867889,290.639771 
	C232.238419,297.408051 223.591522,304.156830 215.103409,311.098907 
	C214.152634,311.876526 213.785706,313.872925 213.832947,315.281128 
	C214.075729,322.516510 214.879013,329.738983 210.874405,336.426117 
	C202.632065,350.189758 183.462646,353.548492 171.514206,342.701721 
	C168.685074,340.133484 166.316757,340.474823 163.716217,341.152100 
	C141.697296,346.886505 119.722733,352.791168 97.736725,358.651764 
	C91.303749,360.366547 84.952278,362.549774 78.417465,363.655701 
	C74.788704,364.269806 74.373253,366.442322 74.064125,368.870361 
	C72.588356,380.461761 66.483353,388.326080 55.172478,391.242493 
	C44.880604,393.896118 35.480057,391.563477 28.598600,383.000763 
	C21.992626,374.780823 20.930466,365.344482 25.070105,355.751556 
	C28.477221,347.856171 34.519932,342.641510 43.276630,340.987671 
	C52.662125,339.215118 60.656151,341.693787 67.128525,348.700592 
	C68.777382,350.485626 70.125771,350.788757 72.598915,350.121155 
	C97.373268,343.433014 122.208565,336.970551 147.030273,330.458099 
	C151.122665,329.384399 155.199982,328.212097 159.345367,327.395721 
	C162.176300,326.838226 163.017487,325.478119 163.067612,322.650909 
	C163.265091,311.513489 169.591644,301.909637 180.052826,298.769775 
	C184.907150,297.312775 191.210831,296.790436 195.635590,298.690247 
	C202.634384,301.695221 206.694519,298.921844 211.552826,295.041443 
	C224.826675,284.439484 238.330475,274.125763 251.722275,263.671082 
	C256.745117,259.749878 261.861328,255.923996 266.607422,251.687668 
	C267.988617,250.454834 268.734131,247.996063 268.904236,246.024445 
	C269.289429,241.559952 268.294342,236.835068 269.371521,232.600388 
	C271.766296,223.185623 278.359955,217.140366 287.533630,214.242661 
	C296.798309,211.316238 305.026093,213.920914 311.826385,220.479080 
	C315.033844,223.572311 317.421204,227.515961 320.779144,231.846832 
	C346.361053,231.846832 373.327454,231.846832 400.642639,231.846832 
	C402.033295,220.533051 407.180267,211.371902 418.216492,207.490616 
	C428.932587,203.721924 438.950623,206.036789 447.366150,214.834808 
	C462.110809,205.513550 476.878632,196.158783 491.665863,186.834763 
	C506.395264,177.547180 520.933533,167.925903 535.999512,159.219238 
	C541.225647,156.199020 541.310852,151.874252 541.905457,147.476517 
	C543.101990,138.627090 552.056702,128.907623 560.650513,126.945076 
	C573.188293,124.081863 582.267639,129.131546 589.878845,138.488022 
	C590.840088,139.669647 592.619568,140.873566 594.037415,140.894760 
	C625.365356,141.362869 656.697266,141.581039 688.023926,142.111725 
	C691.748535,142.174820 692.760986,140.487717 693.799988,137.623047 
	C700.127808,120.177856 714.968018,116.253860 729.885254,122.195992 
	C734.166443,123.901390 736.682739,123.880569 740.512329,121.304863 
	C775.795715,97.573532 811.267822,74.122696 846.678711,50.580700 
	C846.796143,50.502625 846.821350,50.285835 846.889648,50.133839 
	C842.805969,32.609772 855.330261,16.268560 873.503174,16.963017 
	C884.933228,17.399797 895.932251,27.294880 897.958679,39.378857 
	C899.846008,50.633514 891.968872,62.984844 881.200073,67.147926 
	C872.575439,70.482117 864.768860,69.124641 857.412048,64.571106 
	C855.019592,63.090271 853.742188,63.374943 851.860962,64.631920 
	C820.781372,85.397591 789.690735,106.146576 758.607605,126.906929 
	C757.387939,127.721542 756.327515,128.869812 755.008728,129.425400 
	C746.356567,133.070236 743.063965,138.886566 743.686218,148.772873 
	C744.505981,161.797348 725.846680,174.505600 713.138489,170.501862 
	C709.369446,169.314407 705.982727,166.912994 702.065430,164.977676 
z"
    />
  </motion.svg>
	);
  
	}

export default GrowthIcon;
