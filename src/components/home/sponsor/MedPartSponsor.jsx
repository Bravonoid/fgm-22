const MedPartSponsorLogo = (props) =>{
    console.log(props.width)
    return(
       <div className="transition-transform">
            <img   className={`opacity-100     w-auto  h-[5rem] sm:h-24`} src={require(`../../../assets/medPartSponsor/${props.img}`)} alt={props.name} />
       </div>
            

    )
}

export { MedPartSponsorLogo }