function alloy(){
	var s,l;
	s = Number(document.getElementById("solidous").value);
	l = Number(document.getElementById("liquidous").value);
	let alloy,toxic,eutectic,name;

	if (s==200 && l==300)
	{
		alloy = "Sn(50)Zn(49)Cu"
		toxic = "NO"
		eutectic = "NO"
		name = "Galvanite"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==226 && l==260)
	{
		alloy = "Sn(95.5)Cu(4)Ag(0.5)"
		toxic = "NO"
		eutectic = "NO"
		name = "KappFree"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==200 && l==222)
	{
		alloy = "Sn90Zn7Cu3"
		toxic = "NO"
		eutectic = "NO"
		name = "Kapp Eco-Babbitt"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==177 && l==288)
	{
		alloy = "Sn30Pb50Zn20"
		toxic = "YES. Lead Toxicity(Pb)"
		eutectic = "NO"
		name = "Kapp GalvRepair"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==183 && l==215)
	{
		alloy = "Sn50Pb48.5Cu1.5"
		toxic = "NO"
		eutectic = "NO"
		name = "Savbit, Savbit 1, Sav1"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==118 && l==125)
	{
		alloy = "In50Sn50"
		toxic = "NO"
		eutectic = "NO"
		name = "Cerroseal 35"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==217 && l==220)
	{
		alloy = "Sn96.5Ag3.0Cu0.5"
		toxic = "NO"
		eutectic = "Near"
		name = "SAC305"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==220 && l==225)
	{
		alloy = "Sn98.5Ag1.0Cu0.5"
		toxic = "NO"
		eutectic = "Near"
		name = "SAC105"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==221 && l==229)
	{
		alloy = "Sn96Ag4"
		toxic = "NO"
		eutectic = "NO"
		name = "ASTM96TS"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==199 && l==260)
	{
		alloy = "Sn(95.5)Cu(4)Ag(0.5)"
		toxic = "NO"
		eutectic = "NO"
		name = "KappAloy15"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==58 && l==58)
	{
		alloy = "Bi49Pb18Sn12In21"
		toxic = "YES. Lead Toxicity(Pb)"
		eutectic = "YES"
		name = "Cerrolow 136"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==70 && l==91)
	{
		alloy = "Bi56Sn30In14"
		toxic = "NO"
		eutectic = "NO"
		name = "ChipQuik"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==338 && l==393)
	{
		alloy = "Cd95Ag5"
		toxic = "YES. Cadmium Toxicity (Cd)"
		eutectic = "NO"
		name = "KappTec"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==265 && l==300)
	{
		alloy = "Cd70Zn30"
		toxic = "YES. Cadmium Toxicity (Cd)"
		eutectic = "NO"
		name = "KappFre"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==370 && l==363)
	{
		alloy = "Au96.8Si3.2"
		toxic = "NO"
		eutectic = "YES"
		name = "Au97"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else if (s==183 && l==190)
	{
		alloy = "Sn60Pb40"
		toxic = "YES. Lead Toxicity (Pb)"
		eutectic = "Near"
		name = "ASTM60A"
		document.getElementById("alloy").value = alloy;
		document.getElementById("toxic").value = toxic;
		document.getElementById("eutectic").value = eutectic;
		document.getElementById("name").value = name;
	}
	else 
	{
		document.getElementById("alloy").value = "Alloy not available for the specified combination.";
		document.getElementById("toxic").value = "NaN";
		document.getElementById("eutectic").value = "NaN";
		document.getElementById("name").value = "NaN";
	}
}