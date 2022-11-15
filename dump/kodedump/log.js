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
);