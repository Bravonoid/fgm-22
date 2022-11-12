const MedPartSponsorLogo = (props) =>{
    console.log(props.width)
    return(
       <div className="transition-transform">
            <img   className={`opacity-100     w-auto  h-${props.width} `} src={require(`../../../assets/medPartSponsor/${props.img}`)} alt={props.name} />
       </div>
            

    )
}

export { MedPartSponsorLogo }