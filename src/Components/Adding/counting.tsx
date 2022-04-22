import React from 'react';
import CountUp from 'react-countup';

interface CountingProps{
    length: number;
}

export default function Counting({ length }: CountingProps) {

    return(
        <div className="counting">
            <CountUp end={length} duration={1}/>
        </div>
    )
}