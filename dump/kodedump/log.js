
function yay(){
return (
    <View style={styles.container}>
        <Button title="Edit" onPress={ () => console.log('Yay')} />
        <Button title="Delete" onPress={() => console.log('Yay')} />
        {
            Object.entries(item).map((item,index)=>{
                return(
                    <View style={styles.row} key={index}>
                        {/*Vores car keys navn*/}
                        <Text style={styles.label}>{item[0]} </Text>
                        {/*Vores car values navne */}
                        <Text style={styles.value}>{item[1]}</Text>
                    </View>
                )
            })
        }
    </View>
)
    }

return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>PACKING LIST</Text>
        </View>
        <View>
            FLATLIST
        </View>
        <View style={styles.knap}>
            <ButtonComponent type = "primary" content={'Rent this PACK for ONLY DKK' + packprice} onPress = {()=>  handleSave()}/>
        </View>
    </View>
);


      /*
      let hattype;
      if(temperature > 3 && rain == 0){
          hattype = 'sunhat'
      } else if (temperature <= 3 && temperature > 1 && rain == 0){
          hattype = 'benny'
      }else if (temperature <= 3 && temperature > 1 && rain == 1){
          hattype = 'rainbenny'
      } else if (temperature == 1){
          hattype = 'winter'
      }
      //måske inddel hat i genders også... finder vi sgu ud af
      if(hattype != undefined){
          await dbRef.child('hat').child(hattype).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
              if (snapshot.exists()) {
  
                  Object.assign(list, snapshot.val())
              } else {
                  console.log("No data available");
              }
          }).catch((error) => {
              console.error(error);
          });
      }*/


      return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#23272a'}}>
        <View style={{flex: 1, justifyContent: 'center', width: '80%', left: 35, bottom: 50, top: 10}}>
        <ScrollView style={{flex: 1, top: 60}}>
          <View style={{paddingBottom:10}}>
              <Text>Where are you going?</Text>
          </View>
          <View style={{paddingBottom:15, height: 60}}>
          <TextInput
            placeholder={'Location'}
            placeholderTextColor="green"
            value={valueLocation}
            onChangeText={(txt)=>setValueLocation(txt)}
            style={{borderWidth: 0,padding:5,flex: 1,height: 40,backgroundColor: '#36393f', color: 'white' }}
          />
          </View>
          <View style={{paddingBottom:10}}>
              <Text>How long is your tour?</Text>
          </View>
          <View style={{zIndex: open ? 1: 0, paddingBottom:15 }}>
          <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Choose tour length"
            open={open}
            value={valueTourlength}
            items={items}
            setOpen={setOpen}
            setValue={setValueTourlength}
            setItems={setItems}
          /></View>
          <View style={{paddingBottom:10}}>
              <Text>How is the temperature like?</Text>
          </View>
          <View style={{zIndex: open2 ? 1: 0, paddingBottom:15 }}>
          <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Choose temperature"
            open={open2}
            value={valueTemperature}
            items={itemsTemp}
            setOpen={setOpen2}
            setValue={setValueTemperature}
            setItems={setItemsTemp}
            /></View>
            <View style={{paddingBottom:10}}>
              <Text>Is it Raining?</Text>
            </View>
            <View style={{zIndex: open3 ? 1: 0, paddingBottom:15 }}>
            <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Is is Raining?"
            open={open3}
            value={valueRain}
            items={itemsRain}
            setOpen={setOpen3}
            setValue={setValueRain}
            setItems={setItemsRain}
          /></View>
          <View style={{paddingBottom:10}}>
              <Text>Which kind of Terrain is it?</Text>
          </View>
          <View style={{zIndex: open4 ? 1: 0, paddingBottom:15 }}>
          <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Choose Terrain"
            open={open4}
            value={valueTerrain}
            items={itemsTerreain}
            setOpen={setOpen4}
            setValue={setValueTerrain}
            setItems={setItemsTerreain}
          /></View>
          <View style={{paddingBottom:10}}>
              <Text>What's your level?</Text>
          </View>
          <View style={{zIndex: open5 ? 1: 0, paddingBottom:15 }}>
          <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Choose Level"
            open={open5}
            value={valueLevel}
            items={itemsLevel}
            setOpen={setOpen5}
            setValue={setValueLevel}
            setItems={setItems5}
            /></View>
            <View style={{paddingBottom:10}}>
              <Text>Gender</Text>
            </View>
            <View style={{zIndex: open6 ? 1: 0, paddingBottom:15}}>
            <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Choose Gender"
            open={open6}
            value={valueGender}
            items={itemsGender}
            setOpen={setOpen6}
            setValue={setValueGender}
            setItems={setItemsGender}
            />
            </View>
            <View style={{paddingBottom:10}}>
              <Text>Top Size</Text>
            </View>
            <View style={{zIndex: open7 ? 1: 0, paddingBottom:15}}>
            <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Top Size"
            open={open7}
            value={valueSizetop}
            items={itemsSizetop}
            setOpen={setOpen7}
            setValue={setValueSizetop}
            setItems={setItemsSizetop}
            />
            </View>
            <View style={{paddingBottom:10}}>
              <Text>Bottom Size</Text>
            </View>
            <View style={{zIndex: open8 ? 1: 0, paddingBottom:15}}>
            <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Bottom Size"
            open={open8}
            value={valueSizebottom}
            items={itemsSizebottom}
            setOpen={setOpen8}
            setValue={setValueSizebottom}
            setItems={setItemsSizebottom}
            />
            </View>
            <View style={{paddingBottom:10}}>
              <Text>Food</Text>
            </View>
            <View style={{zIndex: open9 ? 1: 0, paddingBottom:15}}>
            <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Food?"
            open={open9}
            value={valueFood}
            items={itemsFood}
            setOpen={setOpen9}
            setValue={setValueFood}
            setItems={setItemsFood}
            />
            </View>
            <View style={{paddingBottom:10}}>
              <Text>Storm-Kitchen</Text>
            </View>
            <View style={{zIndex: open10 ? 1: 0, paddingBottom:15}}>
            <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Storm-Kitchen?"
            open={open10}
            value={valueKitchen}
            items={itemsKitchen}
            setOpen={setOpen10}
            setValue={setValueKitchen}
            setItems={setItemsKitchen}
            />
            </View>
            <View style={{paddingBottom:10}}>
              <Text>Sleeping Kit?</Text>
            </View>
            <View style={{zIndex: open11 ? 1: 0, paddingBottom:45}}>
            <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Sleeping Kit?"
            open={open11}
            value={valueSleepingkit}
            items={itemsSleepingkit}
            setOpen={setOpen11}
            setValue={setValueSleepingkit}
            setItems={setItemsSleepingkit}
            />
            </View>
            
            
            
        </ScrollView >
            <View style={{zIndex: 2, paddingBottom:50, paddingTop: 25}}>
            <ButtonComponent type = "primary" content={"Create Packing List"} onPress = {()=>  handleSave()}/>
            </View>
            </View>
      </View>
    );
